import React, {Component} from "react";
import YoadanTilahun from '../assets/testimonials/YoadanTilahun.jpg'
import biniyamgebreyes from "../assets/testimonials/BiniamGebreyesus.jpg";
import wudalatgedamu from "../assets/testimonials/WedalatGedamu.jpg";
import danetgutema from "../assets/testimonials/DanatGutema.jpg";
import dawityifru from "../assets/testimonials/AtoDawitYifiru.jpg";
import EfrataAshebir from "../assets/testimonials/EfrataAshebir.jpg";
import DesalegnSamuel from "../assets/testimonials/DesalegnSamuel.jpg";
import edenambelu from "../assets/testimonials/EdenAmbelu.jpg";
import etsubdink from "../assets/testimonials/EtsubidinkMehari.jpg";
import tekilu from "../assets/testimonials/germenSchool.jpg";          // case 2
import gebertjansen from "../assets/testimonials/Gebert.jpg";
import getachewalemu from "../assets/testimonials/GetachewAlemu.jpg";
import herantadesse from "../assets/testimonials/heranTadesse.jpg";
import kidistsegut from "../assets/testimonials/KidistSigute.jpg";
import mekedelamekuriahailu from "../assets/testimonials/MekedelaMekuriaHaylu.jpg";
import nebiyuaynalem from "../assets/testimonials/NebiyouAynalem.jpg";
import neway from "../assets/testimonials/pawulos.jpg";  // case 4
import sinshawalemu from "../assets/testimonials/SinshawAlemu.jpg";
import sosinatesfalem from "../assets/testimonials/sosiniat.jpg";
import yosef from "../assets/testimonials/YosefFantu.jpg";
import tesfaneshayele from "../assets/testimonials/TesfaneshAyele.jpg";
import yeabsiradesalegn from "../assets/testimonials/YeabsiraDesalegn.jpg";
import zenebumelaku from "../assets/testimonials/ZenebuMelaku.jpg";
import FissehaAsres from '../assets/testimonials/AtoFisehaAsress.jpg'
import "../assets/css/style.css";
import {Modal} from "react-bootstrap";

export default class testimonialandgallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            show: false,
            selectedIndex: null,
        };
    }

    componentDidMount() {
        this.setState({
            categories: [
                {
                    id: 1,
                    name: "Yoadan Tilahun",
                    img: YoadanTilahun,
                    description:
                  " Access to quality education should be a fundamental right to all across Ethiopia as an educated generation is key to the sustainable growth for our country. Platforms such as Back to School are critical as they create networks, connect students with higher education institutions,introduce latest learning tools, technologies and best practices amongst the scholar community. Trade fairs such as Back to School are pillars to the MICE industry and must continue to be supported and applauded.",
                    worksat: "FlawLess Events",
                },

                {
                    id: 2,
                    name: "ቢንያም ገብረየሱስ",
                    img: biniyamgebreyes,
                    description:
                        "ዘርፈ ብዙ ከሆኑት የትመህርት ችግሮቻችን መከካል የትምህርት  ተደራሽነት ፣ፍትሀዊነት ፣ተገቢነት... ወዘተ ጉዳዮች በሀገራችን ጎልተው የሚስተዋሉ ሲሆን በተለይም ደግሞ ጥራት  ከቅድመ መደበኛ እስከ ከፍተኛ የትምህርት ተቋማት ዛሬም ድረስ ያልተመለሰ ቁለፍ ጉዳይ ሆኖ ይገኛል ። ከላይ ዘርዘር ያደረግናቸው መሰረታዊ የትምህርት ችግሮች በመንግሥት አልያም በተወሰኑ አካላት የሚፈቱ ሳይሆን የሁሉንም ርብርቦሽ የሚጠይቅ ነው። ስለሆነም ባክ ቱ ስኩል ፕሮጀክት በዚህ ዘርፍ እያደረገ ያለው ሀገራዊ እንቅስቃሴ ሊበረታታ እና ሊደገፍ ይገባል እላለሁ ። ",
                    worksat: "የትምህርት ባለሙያ ...በከፍተኛ ትምህርት ተቋማት መምህር ፣ ተመራማሪ እና አሰልጣኝ",
                },


                {
                    id: 3,
                    img: getachewalemu,
                    name: "ጌታቸው ዓለሙ ",
                    description:
                        "በዚህ ክ/ዘመን ከሁሉም በላይ  የሰው ልጅ ዋንኛው ህላዌ  ትምህርት ነው።  ዓለም በዕውቀት ከፍታ የምትበርም ሆናለች። ምርምሩ በመርቀቁ  ከምድሩ፣ ከጠፈሩም አዳዲስ ግኝቶች የሚፈላለትና የሚፈካለት ትውልድ ላይ ነን።  በየዓመቱ በአማራጭ የትምህርት መርጃ ቁሳቁስና ትምህርት ቤቶችን ለመምረጥ የሚያስችል አውደ ርዕይ በማዘጋጀት ሰፊ ልምድ ካለው ድርጅት ጋር ዛሬም ስሰራ ደስተኛ ነኝ።",
                    worksat: "",
                },


                {
                    id: 4,
                    name: "Gebert Janssen",
                    img: gebertjansen,
                    description:
                        "It doesn’t matter what you want to do. Do you want to develop yourself? Do you want to create impact? Do you want to have fun in your life? It all starts with education! Without education, these goals will be unattainable.Back to school Ethiopia Expo is a good example of an organization that shares this view. They create equal opportunities for everyone, young or old, making education accessible to everyone. I am proud to be in contact with this organization and to be able to offer assistance if necessary",
                    worksat:
                        "author, lecturer, event specialist and CEO Eventarchitect-group",
                },


                {
                    id: 5,
                    name: "Heran Tadesse ",
                    img: herantadesse,
                    description:
                        "The Back to School program has been extremely helpful and supportive of the Regina Family Center. We have participated a few years in a row, met many allies and partners! There is no platform of this kind and caliber in Ethiopia. Very grateful to be part of this circle and promote education.",
                    worksat: "Founder of Heran’s Yoga & the Regina Family Center",
                },
                {
                    id: 6,
                    name: "ነብዩ  አይናለም",
                    img: nebiyuaynalem,
                    description:
                        "የተከበራችሁ ተማሪዎች ፣ አስተማሪዎች ፣ወላጆች፣ነጋዴዎች፣ድርጅቶች መልካም አጋጣሚ  በጊዜያችን ምርጥ እና አስፈላጊ የሆነ አውደ ርእይ ትምህርት ቤት፣ ኮሌጅ ፣ ዩኒቨርስቲ ፣የትምህርት ሙሉ ግብአት አቅራቢ ተሰባስበው መተዋወቂያ እና ትስስር መፍጠሪያ አውደ ርእይ  በኑስፊር በመቅረቡ ደስ እያለኝ በዚህ ላይም በመሳተፌ ታላቅ ኩራት ይሰማኛል ። ",
                    worksat: "ሜካኒካል ኢንጅነር እና ማርኬቲንግ ማናጀር",
                },

                {
                    id: 7,
                    name: "Mekedela Mekuria Hailu",
                    img: mekedelamekuriahailu,
                    description:
                        "For any parent one of the most difficult decision to make for their kids is picking the right place for them to learn. The worry starts way before the kids are at age to start school. I believe 'Back to School Ethiopia Expo' has the right mix of solutions to ease the hustle and worry of parents. It also creates the right platform for Educators to position themselves and be fairly visible amongst their competitors in the sector.I applaud the organisers for putting together such an Expo that equally benefits parents and the industry players. ",
                    worksat: "Business and Finance Coach, E4Impact St. Mary’s University",
                },

                {
                    id: 8,
                    name: "Sinshaw Alemu ",
                    img: sinshawalemu,
                    description:
                        "From humble beginnings, I have witnessed Back to School Ethiopia has become one of the few successful educational platforms in Ethiopia. The constant inspiration of the founder has allowed the platform to pass through challenges to bring together diverse stakeholders and key figures in the Ethiopian education sector to re-examine our collaboration and leverage local wisdom in knowledge transfer. I am confident Back to School will continue to play an important role for the betterment of the overall educational system.",
                    worksat: "Chief Operations Officer, Iceaddis",
                },


                {
                    id: 9,
                    name: "Danat Gutema Seyoum",
                    img: danetgutema,
                    description:
                        "In my view adapting this kind of unique and very useful Platform is important not only for students but also it has significant role in country technological and educational development.In this 21th century, most of world country advanced their education by technologies, this platform also help our country by maintaining sustainable educational process and help not to be disturbed because of different problem like pandemics.Since it is very easy and accessible to whom concerned, it can create strong competent students to other world. Also help them to know different technologies and advanced their research which has considerable role in countries development.Furthermore it can create strong tie or relation with  other countries.",
                    worksat: "Student At Etege Menen Girls    Boarding Secondary School",
                },
                {
                    id: 10,
                    name: "Yeabsira Desalegn",
                    img: yeabsiradesalegn,
                    description:
                        "I hope this kind of international expo has it's own advantage on our country, as well as for the community. It develop the inter relation among the participants in the expo and great opportunities for individuals who have interest on it.",
                    worksat: "Student At ETEGE MENEN GIRLS BOARDING SECONDARY SCHOOL",
                },
                {
                    id: 11,
                    name: "Etsubdink Mehari",
                    img: etsubdink,
                    description: "",
                    worksat: "Student At ETEGE MENEN GIRLS BOARDING SECONDARY SCHOOL",
                },
                {
                    id: 12,
                    name: "Sosina Tesfahun",
                    img: sosinatesfalem,
                    description:
                        "I have witnessed the first Back to School Ethiopia Expo back in 2017 August as a volunteer from Rotaract Club of Mella. The team worked towards making a difference on the quality of education in commitment of educational development. It continues to do so in the coming year, and I believe such programs are key to elevate the inclusivity of indigenous knowledge.",
                    worksat: "Rotaract Club of Mella 2018/19 President",
                },
                {
                    id: 13,
                    name: "Dessalegn Samuel",
                    img: DesalegnSamuel,
                    description:
                        "ውድ የተማሪ ቤተሰቦች፤እንደ ወላጅና የትምህርት ባለሙያ መስከረም ሲጠባ የማስበው የነገ  ሀገር ተረካቢ ልጄ ነገውን ዛሬ እንዲሰራ የሚያስችለውን አስተማማኝ ዕውቀትና ክህሎት የሚያገኝበትን ማፈላለግ ነው። በፈጣን ለውጥ በምትጓዘው ዓለም ውስጥ ትክክለኛና ወቅታዊ መረጃ ማግኘት የጉዞ መስመርን ለመወሰን ይረዳል። የትምህርቱ ቤተሰብ ከብዙ አማራጮች የሚበጀውን እንዲመርጥ የሚያስችል የንዲህ ዓይነቱን ዐውደ ርዕይ ጠቀሜታው የጎላ ነው። በመሆኑም አዘጋጁ ምስጋና ሊቸረው ይገባል ።",
                    worksat:
                        "በሣይንስና ከፍተኛ ትምህርት ሚኒስቴር የዓለም አቀፍ ግንኙነት፣ትብብርና ትስስር ዳይሬክተር ጄኔራል",
                },
                {
                    id: 14,
                    name: "Ephrata ashebir",
                    img: EfrataAshebir,
                    description:
                        "I have known back to school expo for 3 years now. It initiated a new platform where people can see the different institutes that are available for learning and companies which serve educational materials. The expo doesn't only include schools but other initiatives that are based on education like extra curricular activities, scholarship applying methods, and others that help students grow holistically. I find the platform so beneficial for students, parents, teachers and anyone who is interested in learning and learning methods as it provides a space to see what is available in the educational sector of Ethiopia.",
                    worksat: "Former exhibitor",
                },
                {
                    id: 15,
                    name: "Dawit Yifru ",
                    img: dawityifru,
                    description:
                        "ውድ የትምህርትና ባሕል ቤተሰቦች፣ አዲስ የትምህርት ዘመን ሲጀመር ለተማሪዎችና ቤተሰቦች ብሩህ ተስፋ የሚሰጥ ሲሆን ለነዚህም አማራጭ የትምህርት መርጃ ቁሳቁስና ትምህርት ቤቶችን ለመምረጥ የሚያስችል አውደ ርዕይ በማዘጋጀት ሰፊ ዕድል የሚሰጥ ድርጅት ጋር በመተባበሬ ከፍተኛ እርካታ ይሰጠኛል።",
                    worksat: "የኢትዮጵያ ሙዚቃ ዘርፍች ማኅበራት ህብረት ፕሬዚዳንት",
                },
                {
                    id: 16,
                    name: "ውድአላት ገዳሙ",
                    img: wudalatgedamu,
                    description:
                        " እኔ በሕይወት ዘመኔ ከገጠሙኝ ሂደቶች ሁሉ፣ በልጅነት ጊዜ በትምህርት እንዳሳለፍ ኩ ት ዕድሜ ፣ የምወደውና ዛሬም ድረስ የምናፍቀው ዘመን የለኝም፤ ለአንድ ታዳጊ ትምህርት ቤቱ ማለት የጋራ ቤቱ፣ የዕውቀት ቤቱ፣ አብሮ የመኖር መለማመጃው፣ ተካፍሎ የማደር መድረኩ፣ የበጎ ፈቃድ አምባሳደርነቱ መገብያ መድረክ ናት፤ በትምህርት ቤት እርሳስ፣ ወረቀት፣ ስክርቢቶ፣ ደብተር ከመዋዋስ ጀምሮ፣ በእያንዳንዱ ተማሪ ኮሮጆ ይሁን በኪስ ወይም በጉንፍ ከሚያዝ ቆሎና ዳቦ ድረስ ፣ ተካፍሎ የሚቋደሱበት፣ ሀብት መጋራትን መማ ማ ሪያ ነው ብዬ አምናለሁ ፡፡",
                    worksat: "ደራሲ",
                },
                {
                    id: 17,
                    name: "Eden Ambelu Tadesse ",
                    img: edenambelu,
                    description:
                        "Back to school Ethiopia expo gives an excellent opportunity to students and many education centers to interact and exchange knowlages and expose young children to technology for bright tomorrow of Ethiopia",
                    worksat: "Student At Etege Menen Girls    Boarding Secondary School",
                },
                {
                    id: 18,
                    name: "Yosef Fantu",
                    img: yosef,
                    description:
                        "When I first joined the Back to school team it had already a noble goal. For years the organization had been promoting, and creating connections, among stakeholders of the education industry, both locally and internationally. Due to the large scope of the project it targeted students and parents from kindergarten to college level. It has been successful in attracting international partners as well as national institutions and policy makers. It had already organized a variety of expos in landmark locations in the city.That said, now more than ever is when the B2S project can have its most significant impact. The past year has shown the world the cracks in our systems. The education sector was significantly hurt as kids couldn't go to school and distant education was an experiment put together in the last minute.Every year we spend without putting our heads together in solving the problems of the industry is a generation lost. That is why the goals of the back to school project are ever more critical to the nation and the world.I highly recommend that we use this platform to make an impact on all sectors of the country's socio-economy",
                    worksat: "",
                },

                {
                    id: 19,
                    name: "Neway Tsegaye",
                    img: neway,
                    description:
                        " I have seen the latest trends & practices that can add great value when adapted to our country. Such platforms are also a huge asset to promote tourism & build cultural ties with friendly nations, as has been the case in similar international educational exhibitions",
                    worksat: "From Pawlos Medical College",
                },

                {
                    id: 20,
                    name: "Ato Teklu",
                    img: tekilu,
                    description:
                        "We have witnessed that Back to School Ethiopia has become one of the few educational platforms in Ethiopia that managed to bring different and key stakeholders together at one place to enhance skill and knowledge transfer. As a German Church School, some of our students with disabilities and teachers had the honor to participate in two such platforms in which they got the chance to present their educational works, karate skills and innovations to the public. This in addition was a very important platform to learn from best practices of other partaking organizations.",
                    worksat: "From Germen Church School",
                },
                {
                    id: 21,
                    name: "Fisseha Asres ",
                    img: FissehaAsres,
                    description:
                        "Back to School Expo is one of it's kind that helps our Children to get ready for the new Academic year and more so to make it part of their culture to make Education a top priority",
                    worksat: " Owner Advisor Ethiopian Skylight Hotel",
                },
                {
                    id: 22,
                    name: "Zenebu Melaku",
                    img: zenebumelaku,
                    description:
                        "I attempted to watch the back-to-school exhibition. It is beneficial and valuable for our country. Those who specialize in various fields can share their culture. It comprises from Abnet schooling to modern kind of educational expo with numerous technologies. The additional fascinating thing is pupils up to grown-ups can take part in. This kind of platform has to make frequently for the improvement of our nation.",
                    worksat: "Student at  Etege Menen Girls Boarding school",
                },
                {
                    id: 23,
                    name: "Kidist Segute",
                    img: kidistsegut,
                    description:
                        "Back to school እያደረገ ያለውን አውደርዕይ ለማየት ሞክሪያለው ለአንድ ሀገር ማደግ ትምህርት ቁልፍ ነገር ስለሆነ በደንብ ሊሰራበት ይገባል። እናም እንደዚህ አይነት የትምህርት አውደርዕዮች ጠቃሚ ናቸው። የግዕዝ ቋንቋ እንዲስፋፋና እንዳይሞት ከቤተክርስቲያን ውጪ ሁላችንም ኢትዮጵያውያን ርብርብ ማድረግ አለብን ብዙ ቀደምት መፅሐፍት በዚሁ ቋንቋ ስለተፃፉ። የአብነት ተማሪዎችን ማካተቱ ደስ ብሎኛል። እናም በተጨማሪ ለቴክኖሎጂና ፈጠራዎች እንዲተዋወቁ በር ይከፍታል።",
                    worksat: "Student At Menen Bordind School ",
                },

                {
                    id: 24,
                    img: tesfaneshayele,
                    name: "Tesfanesh Ayele",
                    description:
                        "We have found the education platform quite beneficial to promote the Alpha University College to the needy from all over the country. The side ways workshops are also very productive to share experiences, to promote new services and   work with potential practitioners from all over the globe. Thank you Back to School Ethiopia Expo, keep it up!",
                    worksat: "Public Relation officer, Alpha University College",
                },

            ],
        });
    }

    handleShow = (i) => {
        this.setState({
            show: true,
            selectedIndex: i,
        });
    };
    handleClose = () => {
        this.setState({
            show: false,
        });
    };
    renderModal = () => {
        if (this.state.selectedIndex != null) {
            const post = this.state.categories[this.state.selectedIndex];
            return (
                <div className="card" style={{width: "100%"}}>
                    <img className="card-img-top" src={post.img} alt={post.name}/>
                    <div className="card-body">
                        <h3 className="card-title">{post.name}</h3>
                        <h5>{post.worksat}</h5>
                        <p className="card-text">{post.description}</p>
                    </div>
                </div>
            );
        }
    };

    render() {
        return (
            <section id="testimonial" className="testimonial">
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    width: '100%',
                    marginLeft: '10%',
                    gap: '20%'
                }}>
                    <div className="section-title">
                        <h3>
                            Our <span>Testimonials</span>
                        </h3>
                    </div>

                    <div
                        style={{display: 'flex', flexDirection: 'row',}}
                        className="row testimonial-container"
                        data-aos="fade-up"

                    >
                        {this.state.categories.map((item, i) => {
                            return (
                                <div>

                                    <div
                                        className="col-lg-4 col-md-6 testimonial-item filter-app"
                                        key={item.id}
                                        variant="primary"
                                    >
                                        <img

                                            src={item.img}
                                            style={{height: "300px", width: '300px'}}
                                            alt=""
                                        />
                                        <div

                                            className="testimonial-info"
                                            data-toggle="modal"
                                            data-target="#exampleModal"
                                            onClick={() => this.handleShow(i)}
                                        >
                                            <div style={{backgroundColor: 'white'}}>
                                                <h4 style={{
                                                    marginRight: '-100px',
                                                    backgroundColor: 'white'
                                                }}>{item.name}</h4>
                                                {/*<h5  style={{width:'200%'}} >{item.worksat}</h5>*/}
                                            </div>


                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <div>{this.renderModal()}</div>
                    </Modal>
                </div>
            </section>
        );
    }
}
