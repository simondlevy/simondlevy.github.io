var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/**
  * utils.js JavaScript utilties for interactive web pages.
  *
  * Copyright (C) 2014 Simon D. Levy
  *
  * This code is free software: you can redistribute it and/or modify
  * it under the terms of the GNU Lesser General Public License as
  * published by the Free Software Foundation, either version 3 of the
  * License, or (at your option) any later version.
  *
  * This code is distributed in the hope that it will be useful,
  * but WITHOUT ANY WARRANTY without even the implied warranty of
  * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  * GNU General Public License for more details.
  *
  * You should have received a copy of the GNU Lesser General Public License
  * along with this code. If not, see <http://www.gnu.org/licenses/>.
  */

function arrayMin(a) {
 
    return Math.min.apply(null, a);
}

function arrayMax(a) {
 
    return Math.max.apply(null, a);
}

function baseToTag(tagbase) {

    return "#".concat(tagbase);
}

function clearCanvas(canvasName) {

    ctx = document.getElementById(canvasName).getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    return ctx;
}

function clearValue(tagbase, index) {

    document.querySelector(indexToTag(tagbase, index)).value = "";
}

function drawLine(ctx, x1, y1, x2, y2, color, width) {

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function drawScaledLine(ctx, x1, y1, x2, y2, color) {

    x1 = scale(x1, ctx.canvas.width);
    y1 = scale(y1, ctx.canvas.height);

    x2 = scale(x2, ctx.canvas.width);
    y2 = scale(y2, ctx.canvas.height);

    drawLine(ctx, x1, y1, x2, y2, color, 1);
}
  
function getCanvasContext() {

    return getCanvasContextByName("canvas");
}

function getCanvasContextByName(name) {

    return document.getElementById(name).getContext("2d");
}

function getFloatValue(id) {

    return parseFloat(document.querySelector("#".concat(id)).value);
}

function getLabeledSliderValue(name) {

    name = '#'.concat(name);

    value = document.querySelector(name.concat('_slider')).value;

    document.querySelector(name.concat('_value')).value = value;

    return parseFloat(value);
}


function indexToTag(tagbase, index) {

    return baseToTag(tagbase).concat(index.toString());
}

function isChecked(id) {

    return document.getElementById(id).checked;
}


function plotArray(ctx, array, color, minval, maxval, linewidth) {

    // Default to line width 1
    if (typeof(linewidth) === 'undefined') {
        linewidth = 1;
    }

    ctx.beginPath();
    ctx.lineWidth = linewidth;
    ctx.strokeStyle = color;

    x = 0;
    y = valToPix(array[0], ctx, minval, maxval);

    ctx.moveTo(x, y);

    for (k=1; k<array.length; ++k) {

        x += (ctx.canvas.width) / array.length;
        y = valToPix(array[k], ctx, minval, maxval);
    
        ctx.lineTo(x, y);
    }

    ctx.stroke();
}

function rand(v) {

    return Math.sqrt(v) * (3.5  * Math.random() - 1.75);
}

function roundToPrecision(value, prec) {

    prec = Math.pow(10, prec);

    return Math.round(value*prec)/prec;
}

function setChecked(id) {

  document.getElementById(id).checked = true;
}

function setTagValue(tag, value) {

    document.querySelector(tag).value = value;
}

function setLabeledSliderValue(name, value) {

    name = '#'.concat(name);

    document.querySelector(name.concat('_slider')).value = value;

    document.querySelector(name.concat('_value')).value = value;
}

function showAxes(ctx, xlabel, ylabel, margin) {

    var w = ctx.canvas.width;
    var h = ctx.canvas.height;

    ctx.beginPath();
    ctx.strokeStyle = "rgb(128,128,128)"; 
    ctx.moveTo(margin,h-margin); ctx.lineTo(w,h-margin);   // X axis
    ctx.moveTo(margin,0); ctx.lineTo(margin,h-margin);     // Y axis
    ctx.stroke();

    ctx.font = "20px Times";
    ctx.fillText(xlabel, ctx.canvas.width/2, ctx.canvas.height);
    ctx.restore()

    var font, lineHeight, x, y;

    x = 5
    y = 100;
    font = 20;
    lineHeight = 15; // this is guess and check as far as I know

    ctx.save()

    ctx.translate(x, y);
    ctx.rotate(-Math.PI / 2);

    ctx.textAlign = 'right';
    ctx.fillText(ylabel, 0, lineHeight / 2);


    ctx.restore();

}

function valToPix(val, ctx, minval, maxval) {

    h = ctx.canvas.height;

    return h - (val - minval) / (maxval - minval) * h;
}


}
/*
     FILE ARCHIVED ON 15:50:46 Jul 09, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:06:43 Jul 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 259.938
  exclusion.robots: 0.071
  exclusion.robots.policy: 0.062
  cdx.remote: 0.06
  esindex: 0.008
  LoadShardBlock: 219.299 (3)
  PetaboxLoader3.datanode: 69.753 (4)
  load_resource: 64.048
  PetaboxLoader3.resolve: 33.677
*/
