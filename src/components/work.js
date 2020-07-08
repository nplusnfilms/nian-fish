import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Scroll from 'react-scroll'
import { RouteTransition, presets } from 'react-router-transition'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'
import LazyImage from "../lazy-image";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
const screenDimensions = getWindowDimensions();
const scroll = Scroll.animateScroll

let index = 0;
let customers = [
   {
      "name": "JESSICA CHASTAIN",
      "img": [
         "assets/img/work/row_1/jessica-chastain.gif"
      ],
      "subtitles": [
         {
            "name": "RICCARDO TISCI FOR GIVENCHY"
         },
         {
            "name": "INTERNATIONAL AWARD, CFDA 2013"
         }
      ]

   },
   {
      "name": "MARINA ABROMOVIC",
      "img": [
         "assets/img/work/row_1/marina-abromovic.gif"
      ],
      "subtitles": [
         {
            "name": "RICCARDO TISCI FOR GIVENCHY"
         },
         {
            "name": "INTERNATIONAL AWARD, CFDA 2013"
         }
      ],

   },
   {
      "name": "KANYE WEST",
      "img": [
         "assets/img/work/row_1/kanye-west.gif"
      ],
      "subtitles": [
         {
            "name": "RICCARDO TISCI FOR GIVENCHY"
         },
         {
            "name": "INTERNATIONAL AWARD, CFDA 2013"
         }
      ],

   },
   {
      "name": ["THOM BROWNE", "X", "BERGDORF GOODMAN"],
      "img": [
         "assets/img/work/row_2/thom-browne-x-bergdorf-goodman.gif"
      ],

   },
   {
      "name": "THOM BROWNE",
      "img": [
         "assets/img/work/row_2/thom-browne-men.jpg"
      ],

   },
   {
      "name": "THOM BROWNE X SAMSUNG",
      "img": [
         "assets/img/work/row_2/thom-browne-x-samsung.gif"
      ],

   },
   
   {
      "name": "JULIAN SCHNABEL",
      "img": [
         "assets/img/work/row_3/1-vertujulian_schnabel.gif"
      ],
      "subtitles": [
         {
            "name": "VERTU,",
			"class": "small",
			"children": [{
				"name": " LISTEN",
				"class": "inline italic"
			}]
         }
      ],

   },
   {
      "name": "BILL T. JONES",
      "img": [
         "assets/img/work/row_3/1-vertubill_t_jones.gif"
      ],
      "subtitles": [
         {
            "name": "VERTU,",
			"class": "small",
			"children": [{
				"name": " LISTEN",
				"class": "inline italic"
			}]
         }
      ],

   },
   {
      "name": "JAMES TURRELL",
      "img": [
         "assets/img/work/row_3/1-vertujames_turrell.gif"
      ],
      "subtitles": [
         {
            "name": "VERTU,",
			"class": "small",
			"children": [{
				"name": " LISTEN",
				"class": "inline italic"
			}]
         }
      ],

   },
   {
      "name": [{name: "ACCESSORY DESIGNER"}],
      "img": [
         "assets/img/work/row_4/cfda_accessories_2010.gif"
      ],
      "subtitles": [
         {
            "name": "CFDA 2010"
         }
      ],

   },
   {
      "name": "RICK OWENS",
      "img": [
         "assets/img/work/row_4/cfda_rick_owens.gif"
      ],
      "subtitles": [
         {
            "name": "LIFETIME ACHIEVEMENT, CFDA 2017"
         }
      ],

   },
   {
      "name": "SWAROVSKI AWARD",
      "img": [
         "assets/img/work/row_4/cfda_accessories_2007.gif"
      ],
      "subtitles": [
         {
            "name": "CFDA 2007"
         }
      ],

   },
   {
      "name": [{name: "WOMENSWEAR DESIGNER"}],
      "img": [
         "assets/img/work/row_5/cfda_womenswear_2013.gif"
      ],
      "subtitles": [
         {
            "name": "CFDA 2013"
         }
      ],

   },
   {
      "name": "MARINA MOSCONE",
      "img": [
         "assets/img/work/row_5/marina_moscone/marina_moscone_f20.jpg",
         "assets/img/work/row_5/marina_moscone/marina_moscone_s20.jpg",
         "assets/img/work/row_5/marina_moscone/marina_moscone_f19.jpg"
      ],

   },
   {
      "name": "VERA WANG",
      "img": [
         "assets/img/work/row_5/cfda_vera_wang_2013.gif"
      ],
      "subtitles": [
         {
            "name": "LIFETIME ACHIEVEMENT, CFDA 2013"
         }
      ],

   },
   {
      "name": "TORY BURCH",
      "img": [
         "assets/img/work/row_6/tory_burch/tory_burch_f20.gif",
         "assets/img/work/row_6/tory_burch/tory_burch_s20.jpg",
         "assets/img/work/row_6/tory_burch/tory_burch_f19.jpg",
         "assets/img/work/row_6/tory_burch/tory_burch_s19.png",
         "assets/img/work/row_6/tory_burch/tory_burch_f18.png",
         "assets/img/work/row_6/tory_burch/tory_burch_s18.png",
         "assets/img/work/row_6/tory_burch/tory_burch_f17.png",
         "assets/img/work/row_6/tory_burch/tory_burch_s17.png"
      ],

   },
   {
      "name": "RUTH FINLEY",
      "img": [
         "assets/img/work/row_6/cfda_ruth_finley.gif"
      ],
      "subtitles": [
         {
            "name": "BOARD OF DIRECTORS’, CFDA 2014"
         }
      ],

   },
   {
      "name": "CHLOE SEVIGNY",
      "img": [
         "assets/img/work/row_6/cfda_swarvoskichloe_sevigny.gif"
      ],
      "subtitles": [
         {
            "name": "WOMENSWEAR DESIGNER, CFDA 2012"
         }
      ],

   },
   {
      "name": {name: "WHAT IS THE CFDA?", class: "italic"},
      "img": [
         "assets/img/work/row_7/what_is_the_cfda.gif"
      ],
      "subtitles": [
         {
            "name": "CFDA 2016"
         }
      ],

   },
   {
      "name": "GLORIA STEINEM",
      "img": [
         "assets/img/work/row_7/gloria_steinem.gif"
      ],
      "subtitles": [
         {
            "name": "BOARD OF DIRECTORS’, CFDA 2017"
         }
      ],

   },
   {
      "name": ["STEPHEN SPROUSE", "MARY ELLEN MARK"],
      "img": [
         "assets/img/work/row_7/vertustephen_sprouse.gif"
      ],
      "subtitles": [
         {
            "name": "VERTU,",
			"class": "small",
			"children": [{
				"name": " LISTEN",
				"class": "inline italic"
			}]
         }
      ],

   },
   {
      "name": "ALEXANDER MCQUEEN",
      "img": [
         "assets/img/work/row_8/alexander_mcqueen_spring_2000.png"
      ],

   },
   {
      "name": "ALEXANDER MCQUEEN",
      "img": [
         "assets/img/work/row_8/1-alexander_mcqueen_spring_2000.png"
      ],

   },
   {
      "name": "ALEXANDER MCQUEEN",
      "img": [
         "assets/img/work/row_8/2-alexander_mcqueen_spring_2000.png"
      ],

   },
   {
      "name": "CALVIN KLEIN, APLA",
	  "subtitles": ["LOS ANGELES"],
      "img": [
         "assets/img/work/row_9/calvin_klein_apla.jpg"
      ],

   },
   {
      "name": "CALVIN KLEIN, APLA",
	  "subtitles": ["LOS ANGELES"],
      "img": [
         "assets/img/work/row_9/calvin_klein_aplamarky_mark.gif"
      ],

   },
   {
      "name": "CALVIN KLEIN, APLA",
	  "subtitles": ["LOS ANGELES"],
      "img": [
         "assets/img/work/row_9/ck_kate_moss.jpg"
      ],

   },
   {
      "name": "CALVIN KLEIN COLLECTION",
      "img": [
         "assets/img/work/row_10/calvin_klein_s93.png"
      ],

   },
   {
      "name": "CALVIN KLEIN COLLECTION",
      "img": [
         "assets/img/work/row_10/calvin_klein_s99.jpg"
      ],

   },
   {
      "name": "CALVIN KLEIN COLLECTION",
      "img": [
         "assets/img/work/row_10/calvin_klein_s94.jpg"
      ],

   },
   

   {
      "name": "HELMUT LANG",
      "img": [
         "assets/img/work/row_11/helmut-lang-2.jpg"
      ],

   },
   {
      "name": "HELMUT LANG",
      "img": [
         "assets/img/work/row_11/helmut-lang-1.jpg"
      ],

   },
   {
      "name": "HELMUT LANG",
      "img": [
         "assets/img/work/row_11/helmut-lang-3.jpg"
      ],

   },
   {
      "name": ["ITALO ZUCHELLI", {name: "FOR", class: "small"}, "CALVIN KLEIN"],
      "img": [
         "assets/img/work/row_12/calvin-klein-men/calvin-klein-men.gif",
         "assets/img/work/row_12/calvin-klein-men/2.png",
         "assets/img/work/row_12/calvin-klein-men/3.png"
      ],

   },
   {
      "name": "DAVID BOWIE",
      "img": [
         "assets/img/work/row_12/david-bowie.gif"
      ],
      "subtitles": [
         {
            "name": "BOARD OF DIRECTORS’, CFDA 2016"
         }
      ],

   },
   {
      "name": "THE ROW",
      "img": [
         "assets/img/work/row_12/the-row/the-row.jpg",
         "assets/img/work/row_12/the-row/the-row-s20.jpg",
         "assets/img/work/row_12/the-row/the-row-f19.jpg",
         "assets/img/work/row_12/the-row/the-row-4.png",
         "assets/img/work/row_12/the-row/the-row-5.png",
         "assets/img/work/row_12/the-row/the-row-6.png"
      ],

   },
   {
      "name": "NARCISO RODRIGUEZ",
      "img": [
         "assets/img/work/row_13/narciso_rodriguez/narciso_rodriguez.png",
         "assets/img/work/row_13/narciso_rodriguez/1-narciso_rodriguez.png"
      ],

   },
   {
      "name": "THOM BROWNE",
      "img": [
         "assets/img/work/row_13/thom_browne_women/thom_browne_f19.gif",
         "assets/img/work/row_13/thom_browne_women/thom_browne_women.png",
         "assets/img/work/row_13/thom_browne_women/1-thom_browne_women.png"
      ],

   },
   {
      "name": ["FRANCISCO COSTA", {name: "FOR", class: "small"}, "CALVIN KLEIN"],
      "img": [
         "assets/img/work/row_13/calvin_klein/calvin_klein_women.png",
         "assets/img/work/row_13/calvin_klein/1-calvin_klein_women.png",
         "assets/img/work/row_13/calvin_klein/2-calvin_klein_women.png",
         "assets/img/work/row_13/calvin_klein/3-calvin_klein_women.png"
      ],

   },
   {
      "name": "JASON WU",
      "img": [
         "assets/img/work/row_14/swarovskijason_wu.gif"
      ],
      "subtitles": [
         {
            "name": "SWAROVSKI AWARD, CFDA 2010"
         }
      ],

   },
   {
      "name": "JOSEPH ALTUZARRA",
      "img": [
         "assets/img/work/row_14/swarovskijoseph_altuzarra.gif"
      ],
      "subtitles": [
         {
            "name": "SWAROVSKI AWARD, CFDA 2010"
         }
      ],

   },
   {
      "name": "PATRICK ERVELL",
      "img": [
         "assets/img/work/row_14/swarovskipatrick_ervell.gif"
      ],
      "subtitles": [
         {
            "name": "SWAROVSKI AWARD, CFDA 2010"
         }
      ],

   },
   {
      "name": "BETSEY JOHNSON",
      "img": [
         "assets/img/work/row_15/cfda_betsey_johnson.gif"
      ],
      "subtitles": [
         {
            "name": "LIFETIME ACHIEVEMENT, CFDA 2015"
         }
      ],

   },
   {
      "name": "ANNA SUI",
      "img": [
         "assets/img/work/row_15/anna_sui.jpg"
      ],

   },
   {
      "name": "BETSEY JOHNSON",
      "img": [
         "assets/img/work/row_15/1-cfda_betsey_johnson.gif"
      ],
      "subtitles": [
         {
            "name": "LIFETIME ACHIEVEMENT, CFDA 2015"
         }
      ],

   },
   {
      "name": "SELF-PORTRAIT",
      "img": [
         "assets/img/work/row_16/self_portrait/selfportrait_s19.gif",
         "assets/img/work/row_16/self_portrait/selfportrait_f20.jpg",
         "assets/img/work/row_16/self_portrait/selfportrait_s20.jpg",
         "assets/img/work/row_16/self_portrait/selfportrait_f19.jpg",
         "assets/img/work/row_16/self_portrait/selfportrait_f18.png",
         "assets/img/work/row_16/self_portrait/selfportrait_s18.png",
         "assets/img/work/row_16/self_portrait/selfportrait_f17.png",
         "assets/img/work/row_16/self_portrait/selfportrait_s17.png"
      ],

   },
   {
      "name": "SWAROVSKI AWARD",
      "img": [
         "assets/img/work/row_16/swarovski.gif"
      ],
      "subtitles": [
         {
            "name": "CFDA 2012"
         }
      ],

   },
   {
      "name": "ZAC POSEN",
      "img": [
         "assets/img/work/row_16/zac_posen_s08.jpg"
      ],

   },
   
   {
      "name": "JIL SANDER",
      "img": [
         "assets/img/work/row_17/jil_sander_f04.jpg"
      ],

   },
   {
      "name": ["REI KAWAKUBO", "COMME DES GARÇONS"],
      "img": [
         "assets/img/work/row_17/comme_des_garcons.gif"
      ],
      "subtitles": [
         {
            "name": "INTERNATIONAL AWARD, CFDA 2012"
         }
      ],

   },
   {
      "name": "PHARRELL",
      "img": [
         "assets/img/work/row_17/cfdapharrell.gif"
      ],
      "subtitles": [
         {
            "name": "FASHION ICON, CFDA 2015"
         }
      ],

   },
   {
      "name": "CHLOÉ",
      "img": [
         "assets/img/work/row_18/chloe_s11.png"
      ],

   },
   {
      "name": "VERA WANG",
      "img": [
         "assets/img/work/row_18/vera_wang_f16.gif"
      ],

   },
   
   {
      "name": "LOEWE",
      "img": [
         "assets/img/work/row_18/loewe.jpg"
      ],

   },
   
   
   {
      "name": "H&M",
      "img": [
         "assets/img/work/row_19/h&m.jpg"
      ],
      "subtitles": [
         {
            "name": "CENTRAL PARK"
         }
      ],

   },
   {
      "name": "SEAN JOHN",
      "img": [
         "assets/img/work/row_19/sean_john.gif"
      ],

   },
   {
      "name": "TOMMY HILFIGER",
      "img": [
         "assets/img/work/row_19/tommy_hilfiger/tommy_hilfiger_x_gigi_f16.gif",
         "assets/img/work/row_19/tommy_hilfiger/2_tommy_hilfiger.png",
         "assets/img/work/row_19/tommy_hilfiger/3_tommy_hilfiger.png"
      ],

   },
   {
      "name": [{name: "VALENTINO 40", children: [{sup:true, name:"TH", span: false}, {name:" ANNIVERSARY", span: false}] }],
      "img": [
         "assets/img/work/row_20/valentino_40th_anniversary.jpg"
      ],
      "subtitles": [
         {
            "name": "LOS ANGELES"
         }
      ],

   },
   {
      "name": ["TOM FORD", {name: "FOR", class: "small"}, "GUCCI"],
      "img": [
         "assets/img/work/row_20/gucci_men_f98.jpg"
      ],

   },
   {
      "name": ["TOM FORD", {name: "FOR", class: "small"}, "GUCCI"],
      "img": [
         "assets/img/work/row_20/gucci_women_f98.jpg"
      ],

   },
   {
      "name": "TOMMY HILFIGER",
      "img": [
         "assets/img/work/row_21/tommy_hilfiger_men.png"
      ],

   },
   {
	   
      "name": [{name: "MENSWEAR DESIGNER"}],
      "img": [
         "assets/img/work/row_21/cfda_menswear_2013.gif"
      ],
      "subtitles": [
         {
            "name": "CFDA 2013"
         }
      ],

   },
   {
      "name": ["THOM BROWNE", {name: "FOR", class: "small"}, "MONCLER GAMME BLEU"],
      "img": [
         "assets/img/work/row_21/moncler_gamme_bleu/moncler_gamme_bleu.jpg",
         "assets/img/work/row_21/moncler_gamme_bleu/moncler_gamme_bleu.png"
      ],

   },
   {
      "name": "RALPH LAUREN",
      "img": [
         "assets/img/work/row_22/ralph_lauren_f05.jpg"
      ],

   },
   {
      "name": "RALPH LAUREN",
      "img": [
         "assets/img/work/row_22/ralph_lauren.jpg"
      ],

   },
   {
      "name": "RALPH LAUREN",
      "img": [
         "assets/img/work/row_22/ralph_lauren_f06.jpg"
      ],

   },
   {
      "name": "VICTORIA BECKHAM",
      "img": [
         "assets/img/work/row_23/victoria_beckham/victoria_beckham_f18.gif",
         "assets/img/work/row_23/victoria_beckham/1.png",
         "assets/img/work/row_23/victoria_beckham/2.png",
         "assets/img/work/row_23/victoria_beckham/3.png"
      ],

   },
   {
      "name": "MARC JACOBS PERFUME LAUNCH",
      "img": [
         "assets/img/work/row_23/marc_jacobs_perfume_launch.png"
      ],
      "subtitles": [
         {
            "name": "HUDSON RIVER PARK"
         }
      ],

   },
   {
      "name": "BRYAN CRANSTON",
      "img": [
         "assets/img/work/row_23/network.gif"
      ],
      "subtitles": [
         {
            "name": "NETWORK"
         }
      ],

   },
   {
      "name": ["CARTIER SANTOS WATCH", "100TH ANNIVERSARY"],
      "img": [
         "assets/img/work/row_24/cartier_event.png"
      ],
      "subtitles": [
         {
            "name": "PARK AVENUE ARMORY"
         }
      ],

   },
   {
	   
      "name": [{name: "CALVIN KLEIN 40", children: [{sup:true, name:"TH", span: false}, {name:" ANNIVERSARY", span: false}] }],
      "img": [
         "assets/img/work/row_24/calvin_klein_40th_anniversary.jpg"
      ],
      "subtitles": [
         {
            "name": "THE HIGH LINE"
         }
      ],

   },
   {
      "name": [{name: "JAMES TURRELL,", children: [{class: "italic inline", name: " FIRST BLUSH"}]}],
      "img": [
         "assets/img/work/row_24/vertu.jpg"
      ],
      "subtitles": [
         {
            "name": "VERTU LAUNCH, PARIS",
         },
      ],

   }
]

if (screenDimensions.width <= 480)
{
	let temp = customers[29];
	customers[29] = customers[27];
	customers[27] = temp;
}

export default class Work extends Component {

	constructor (props) {
		super(props)
		this.state = {
			photoIndex: 0,
			isOpen: false
		}
	}

	handleClick = (event, id) => {
		event.preventDefault()
		this.setState({
			isOpen: true,
			selectedID: id
		})
		/*
		scroll.scrollToTop({
			duration:0,
			smooth:false
		})
		*/
	}
	parseObject(object, _class){
		if (typeof object === "undefined") return false;
		var output = [];
		object.forEach((value,index,array) => {
			var _children = [];
			if (typeof value.children !== "undefined")
			{
				_children = this.parseObject(value.children);
			}
			if (typeof value !== "string")
			{
				if (typeof value.name !== "undefined")
				{
					var _value = value;
					value = _value.name;
					if (typeof _value.sup !== "undefined" && _value.sup)
					{
						value = <sup>{value}</sup>
					}
					if (typeof _value.span === "undefined" || _value.span)
					{
						if (typeof _value.class === "undefined" && _class) _value.class = _class;
						if (typeof _value.class !== "undefined")
							value = <span class={_value.class}>{value}{_children}</span>
						else
							value = <span>{value}{_children}</span>
						
					}
				}
			}
			else
			{
				if (_class)
					value = <span class={_class}>{value}{_children}</span>
				else
					value = <span>{value}{_children}</span>
			}
			output.push(value)
		});
		return output;
	}
	render () {
		const { isOpen, photoIndex, selectedID } = this.state
		var _id = -1;
		return (
			<div>
				<h1>Work</h1>
				{isOpen && (
					<Lightbox
						mainSrc={customers[selectedID].img[photoIndex]}
						nextSrc={customers[selectedID].img[(photoIndex + 1) % customers[selectedID].img.length]}
						prevSrc={customers[selectedID].img[(photoIndex + customers[selectedID].img.length - 1) % customers[selectedID].img.length]}
						onCloseRequest={() => this.setState({ isOpen: false, photoIndex: 0 })}
						onMovePrevRequest={() =>
							this.setState({
								photoIndex: (photoIndex + customers[selectedID].img.length - 1) % customers[selectedID].img.length,
							})
						}
						onMoveNextRequest={() =>
							this.setState({
								photoIndex: (photoIndex + 1) % customers[selectedID].img.length,
							})
						}
					/>
				)}
				<RouteTransition pathname={this.props.location.pathname} {...presets.fade}>
					<section>
						<ul className="list-customers">
							{
								customers.map((customer) => {
									_id++;
									const id = _id;
									customer.id = id;
									const img = customer.img[0];
									var customer_name = [];
									var subtitles = [];
									if (Object.prototype.toString.call(customer.name) !== '[object Array]') customer.name = [customer.name];
									customer_name = this.parseObject(customer.name);
									subtitles = this.parseObject(customer.subtitles, "small subtitle");
									var html_object = "";
									if (id < 9) //Apply lazy loading on images after 1-9
										html_object = <img src={img} alt="" />
									else
										html_object = <LazyImage src={img} alt="" />
									return(
										<li key={customer.id}>
											<a href="" className="disabled" onClick={(event) => this.handleClick(event, id)}>
												{html_object}
												<label class="loading"><span class="loading"></span></label>
												<label>{customer_name}{subtitles}</label>
											</a>
										</li>
									)
								})
							}
						</ul>
					</section>
				</RouteTransition>
			</div>
		)
	}
}