/*
* Pinocchio Editor
* by David Linke Cesami
* licensed under a Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.
* For more information visit pinocchio.us
*/
var config = {
	baseObject:{
		id:'document__new_document',
		name: 'New Document',
		children : [{
			id : 'layer_1',
			type: 'layer',
			typeNum:1, // 0 for the root level, 1 for layers and 2 for elments;
			selected:false,
			locked:false,
			visible:true,
			styles:{
				'base':{
					'normal':{top:'0',
						tPx:0,
						left:'0',
						lPx:0,
						width:'0',
						wPx:0,
						height:'0',
						hPx:0,
						overflow:'visible',
						'border-width':'0px',
						bwPx:0,
						opacity:1,
						'mix-blend-mode':'normal'
					}
				}
			},
			children : []
		}],
		type:'root',
		typeNum:0,
		styles:{
			base:{
				normal:{}
			}
		}
	},
	templates:{
		properties:'<strong>properties</strong>'
	},
	modal:{
		content:'default modal content'
	},
	mouse:{
		left:0,
		top:0,
		down:{
			x:0,
			y:0
		},
		up:{
			x:0,
			y:0
		},
		dragDelta:{
			x:0,
			y:0
		},
		offset:{
			x:0,
			y:0,
			down:{
				x:0,
				y:0
			},
			up:{
				x:0,
				y:0
			}
		}
	},
	tree:{},
	selection:{
		active:null,
		previous:null,
		next:null,
		parent:null
	},
	screen : {
		id:'screen',
		element:document.getElementById('screen'),
		width : '270px',
		height : '440px',
		wPx:270,
		hPx:440,
		mouse:{
			x:null,
			y:null
		},
		overflow:false
	},
	tool:'drawBox',
	toolPrev:null,
	config:{
		sidebarClass:'',
		allowNestedElements:false
	},
	lang:{
		act:'en',
		en:{
			canvas:'canvas',
			layer:'layer',
			element:'element',
			welcome:'Welcome',
			createNewDocument:'New Document',
			name:'Name',
			width:'Width',
			height:'Height',
			create:'Create',
			layers:'Layers',
			setFillColor:'Set Fill Color',
			setBorderColor:'Set Border Color',
			setBorderWidth:'Set Border Width',
			new:'New',
			save:'Save',
			locally:' (Locally)',
			createNewFileAndLoseChanges:'Create new file and loose changes?',
			openNewFileAndLoseChanges:'Open new file and loose changes?',
			saveAs:'Save As...',
			saveDocumentAs:'Save Document As',
			doYouWantToOverwrite:'Do you want to overwrite',
			cancel:'Cancel',
			openDocument:'Open Document',
			open:'Open',
			copy:'Copy',
			properties:'Properties',
			top:'top',
			left:'left',
			text:'text',
			textAlign:'text align',
			fontSize:'font size',
			fontColor:'font color',
			fontFamily:'font family',
			fontWeight:'font weight',
			layout:'layout',
			padding:'padding',
			margin:'margin',
			overflow:'overflow',
			canvasOverflow:'canvas overflow',
			baseStyle:'base style',
			hover:'hover',
			active:'active',
			textWrap:'text wrap',
			align:'align',
			center:'center',
			right:'right',
			justify:'justify',
			textElementPlaceHolder:'The text you\'d like your element to have',
			hidden:'hidden',
			scroll:'scroll',
			auto:'auto',
			initial:'initial',
			inherit:'inherit',
			textStyle:'ttext style',
			bold:'bold',
			italic:'italic',
			underline:'underline',
			strikeThrough:'strike through',
			normal:'normal',
			noWrap:'no wrap',
			newLayer:'new layer',
			removeSelectedLayer:'Remove Selected Layer',
			close:'close',
			border:'border',
			borderWidth:'border width',
			borderRadius:'border radius',
			borderStyle:'border style',
			borderColor:'border color',
			valueInPixels:'enter value in pixels',
			none:'none',
			solid:'solid',
			dashed:'dashed',
			dotted:'dotted',
			groove:'groove',
			double:'double',
			ridge:'ridge',
			inset:'inset',
			outset:'outset',
			style:'style',
			fill:'fill',
			blendingMode:'blending mode',
			opacity:'opacity',
			blending:'blending',
			color:'color',
			fillColor:'fill color',
			image:'image',
			backgroundImage:'background image',
			imageUrl:'image url',
			browse:'browse',
			bottom:'bottom',
			backgroundPosition:'bg. position',
			repeat:'repeat',
			backgroundRepeat:'bg. repeat',
			repeatHorizontally:'repeat horizontally',
			repeatVertically:'repeat vertically',
			dontRepeat:'don\'t repeat',
			backgroundSize:'bg. size',
			stretch:'stretch',
			fitToBoundary:'fit to boundary',
			contained:'contained within boundary',
			preview:'preview',
			paste:'paste',
			duplicateLayer:'duplicate layer',
			pasteInPlace:'paste in place',
			toolbar:'toolbar'
		}
	},
	drawStyle : {
		'background-color':'#fff',
		'border-color':'#000',
		'border-style':'solid',
		'border-width':'1px',
		bwPx:0
	},
	stylePickers:{
		'background-color':'',
		'border-color':'',
		'border-width':'',
		'border-style':''
	},
	snap:{
		canvas:true,
		element:true
	},
	flags:{
		storage:{
			canSave:false
		},
		elementState:'normal',
		screenState:'base',
		activePanels:{
			style:true,
			layout:true,
			text:true,
			image:true
		},
		activePanel:1,
		dragType:null
	},
	clipboard:null,
	uhaul:null
};
