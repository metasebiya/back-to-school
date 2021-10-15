import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({

  root: {
    width: "auto",
    marginTop:'20px',
    minHeight:'93%'
},
media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
},
expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
}),
},
expandOpen: {
    transform: "rotate(180deg)",
},
avatar: {
    backgroundColor: red[500],
},
// ======
//     root: {
//         width:'auto',
//         marginTop:'15px',
//         marginRight:'15px'
//     },
//     media: {
//         height: 0,
//         paddingTop: '56.25%', // 16:9
//     },
//     expand: {
//         transform: 'rotate(0deg)',
//         marginLeft: 'auto',
//         transition: theme.transitions.create('transform', {
//             duration: theme.transitions.duration.shortest,
//         }),
//     },
//     expandOpen: {
//         transform: 'rotate(180deg)',
//     },
//     avatar: {
//         backgroundColor: red[500],
//     },
// >>>>>>> 3f2a5b053d4889e847d8b1a7c6005caba18de951

  titile: {
    color: "red",
  },
}));

export default function ContactCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.titile}
        title="PLEASE DON’T TELL!"
        subheader="Introducing our 5th edition Exclusive Benefit Package!                                                             "
      />
      <CardContent>
        <Typography paragraph>
          “Back to School Virtual Detour De Ethiopia, 5th edition engage with
          more than fifty, 50, government & private college/universities though
          out Ethiopia”.
        </Typography>


        <Typography paragraph>
          {" "}
          Caveat: Early registration on Back to School Virtual Detour De
          Ethiopia, 2022 has the following privileges to offer for exhibitors!
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <ul>
            <li>
              {" "}
              Be part of the grand Back to School lottery ticket for the chance
              to win “LIFE TIME FREE TO ATTENED” certificate of honor.
            </li>
            <li>
              Entitled to take part on 2 of the virtual tour programs FREE of
              charge.
            </li>
            <li>Entitled for a 20% discount on all virtual tour package.</li>
            <li>
              Entitled for Peninsula stand on 7 of the virtual tour event
              locations in accord to their location choosing.
            </li>
            <li>
              Exhibitor’s promotional video inclusion on event official websites
              until the end of the virtual tour program.
            </li>
            <li>
              Exhibitor’s promotional documents to be displayed onsite on all
              fifty, 50, college & universities that shall be included in the
              virtual tour program.
            </li>
            <li>
              Exhibitors who shall be donating books, either in hard or soft
              copy, to Noosphere Academy shall be entitled for a 50% discount on
              all virtual tour packages. Kindly note that the discount is
              applicable with the number of books donated.
            </li>
            <li>
              Exclusive access to our event monthly digital newsletter.
              Exhibitors shall also be granted a space in our digital newsletter
              to share their part of story.
            </li>
            <li>
              Entitled for a free upgrade as a sponsor with privileges intact,
              upon availability.
            </li>
          </ul>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Caveats: Names & location details of all fifty, 50, government &
            private universities in Ethiopia that shall be included on Back to
            School Virtual Detour De Ethiopia, to be announced on December 16,
            2021.
          </Typography>
          <Typography paragraph>
            SAVE UP TO 20 – 50% PARTICPATION COST!
          </Typography>
          <Typography>REGISTER NOW!</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
// =======
//                 <Typography paragraph> Caveat:
//                     Early registration on Back to School Virtual Detour De Ethiopia, 2022 has the following privileges to offer for exhibitors!
//                 </Typography>
//                 <Typography >
//
//                     <ul>
//                         <li> Be part of the grand Back to School lottery ticket for the chance to win “LIFE TIME FREE TO ATTENED” certificate of honor.</li>
//                         <li>Entitled to take part on 2 of the virtual tour programs FREE of charge.</li>
//                         <li>Entitled for a 20% discount on all virtual tour package.</li>
//                         <li>Entitled for Peninsula stand on 7 of the virtual tour event locations in accord to their location choosing.</li>
//                         <li>Exhibitor’s promotional video inclusion on event official websites until the end of the virtual tour program.</li>
//                         <li>Exhibitor’s promotional documents to be displayed onsite on all fifty, 50, college & universities that shall be included in the virtual tour program.</li>
//                         <li>Exhibitors who shall be donating books, either in hard or soft copy, to Noosphere Academy shall be entitled for a 50% discount on all virtual tour packages.
//                             Kindly note that the discount is applicable with the number of books donated.</li>
//                         <li>Exclusive access to our event monthly digital newsletter.
//                             Exhibitors shall also be granted a space in our digital newsletter to share their part of story.</li>
//                         <li>Entitled for a free upgrade as a sponsor with privileges intact, upon availability.</li>
//                     </ul>
//                 </Typography>
//             </CardContent>
//             <CardActions disableSpacing>
//                 <IconButton
//                     className={clsx(classes.expand, {
//                         [classes.expandOpen]: expanded,
//                     })}
//                     onClick={handleExpandClick}
//                     aria-expanded={expanded}
//                     aria-label="show more"
//                 >
//                     <ExpandMoreIcon />
//                 </IconButton>
//             </CardActions>
//             <Collapse in={expanded} timeout="auto" unmountOnExit>
//                 <CardContent>
//                     <Typography paragraph>Caveats:
//                         Names & location details of all fifty, 50, government & private universities
//                         in Ethiopia that shall be included on Back to School Virtual Detour De Ethiopia,
//                         to be announced on December 16, 2021.
//                     </Typography>
//                     <Typography paragraph>
//                         SAVE UP TO 20 – 50% PARTICPATION COST!
//                     </Typography>
//                     <Typography>REGISTER NOW!</Typography>
//                 </CardContent>
//             </Collapse>
//         </Card>
//     );
// >>>>>>> 3f2a5b053d4889e847d8b1a7c6005caba18de951
}
