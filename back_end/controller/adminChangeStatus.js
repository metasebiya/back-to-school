mongoose = require('mongoose');

var event = mongoose.model('event');
var editevent = mongoose.model('editevent');


changeeventStatus = function (req, res) {
    event.findOne({_id: req.body.params.id}, function (err, productDocs) {
        if (err) {
            console.log(err)
        } else {
            const listingStatusChange = () => {
                if (req.body.params.selectedButton === "Approved") {
                    return "Active"
                }
                return productDocs.listingStatus
            };
            if (productDocs) {
                event.updateOne({_id: req.body.params.id}, {
                    editedVersion: false,
                    reviewStatus: req.body.params.selectedButton,
                    listingStatus: listingStatusChange(),
                    noteToVendor: req.body.params.noteToVendor
                }, function (err, docs) {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log("Successfully Updated." + docs);
                        res.send("success");
                    }

                })
            } else {
                editevent.findOne({_id: req.body.params.id}, function (err, updatedDocs) {
                    if (err) {
                        console.log(err)
                    } else {
                        const listingStatusChangeUpdated = () => {
                            if (req.body.params.selectedButton === "Approved") {
                                return "Active"
                            }
                            return updatedDocs.listingStatus
                        };
                        if (updatedDocs) {
                            event.findOne({_id: updatedDocs.originalId}, function (err, docs) {
                                if (err) {
                                    console.log(err)
                                } else {
                                    if (req.body.params.selectedButton === "Approved") {
                                        event.updateOne({_id: updatedDocs.originalId}, {
                                            editedVersion: false,
                                            productName: updatedDocs.productName,
                                            productDescription: updatedDocs.productDescription,
                                            productCategory: updatedDocs.productCategory,
                                            productPrice: updatedDocs.productPrice,
                                            productCommission: updatedDocs.productCommission,
                                            productVendorName: updatedDocs.productVendorName,
                                            productLaunchDate: updatedDocs.productLaunchDate,
                                            productNetwork: updatedDocs.productNetwork,
                                            noteToReviewer: updatedDocs.noteToReviewer,
                                            listingType: updatedDocs.listingType,

                                            reviewStatus: req.body.params.selectedButton,
                                            listingStatus: listingStatusChangeUpdated(),
                                            noteToVendor: req.body.params.noteToVendor,
                                            encodedAvatarUrl: updatedDocs.encodedAvatarUrl

                                        }, function (err, updated) {
                                            if (err) {
                                                console.log(err)
                                            } else {
                                                if (updated) {
                                                    console.log("alloooo")
                                                }
                                                editevent.deleteOne({_id: req.body.params.id}, function (err, deletedDocs) {
                                                    if (err) {
                                                        console.log(err)
                                                    } else {
                                                        console.log("Successfully Deleted")
                                                        res.send("Successfully Delted")
                                                    }
                                                })
                                            }

                                        })
                                    } else {
                                        console.log("do nothing REjected");
                                        editevent.updateOne({_id: req.body.params.id}, {
                                            reviewStatus: req.body.params.selectedButton,
                                            listingStatus: listingStatusChangeUpdated(),
                                            noteToVendor: req.body.params.noteToVendor
                                        }, function (err, editedDocs) {
                                            if (err) {
                                                console.log(err)
                                            } else {
                                                event.updateOne({_id: editedDocs.originalId}, {
                                                        reviewStatus: req.body.params.selectedButton,
                                                        listingStatus: listingStatusChangeUpdated(),
                                                        noteToVendor: req.body.params.noteToVendor
                                                    }, function (err, updatedOnceSuccess) {
                                                        res.send();
                                                    }
                                                )
                                            }
                                        })
                                    }

                                }

                            })
                        }
                    }
                })
            }
        }
    })


};
module.exports=changeeventStatus;
