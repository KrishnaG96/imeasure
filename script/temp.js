var total = 0;
var access={
 RectRoom:[],
 polygon:[],
 stairs:[],
}
$("#btnSubmit").click(function() {
  access.RectRoom=[]
  access.polygon=[]
  access.stairs=[]
  var tr = document.getElementById('mytable');
  tr.innerHTML = "<tbody> <tr><th>Room</th> <th>Product Type</th> <th>Room Size</th> <th>Tile Size</th> <th>required tiles</th> </tr> </tbody>";
  //Starting rectRoomItem
  if ($("#productTypeSelect").val() == "Tile" && $(".room-section ").find(".rectRoomItem ").length) {
    //room width and length calc
    var room = $(".room-section .rectRoomItem");
    room.each(function() {

      var inputs = $(this).find(".form-control");
      var roomNo = inputs[0].value;
      var roomwidth = inputs[1].value;
      var roominch = inputs[4].value;
      var rwidth = parseInt(inputs[1].value) + parseFloat(inputs[2].value / 12);
      var rlength = parseInt(inputs[4].value) + parseFloat(inputs[5].value / 12);
      var rsquare = Math.ceil((rwidth * rlength));
      //tile width and Length
      var twid = $(".product-info.hidden.active .imperialDiv").find("input,select")[0].value;
      var twidi = $(".product-info.hidden.active .imperialDiv").find("input,select")[1].value;
      var tlen = $(".product-info.hidden.active .imperialDiv").find("input,select")[2].value;
      var tleni = $(".product-info.hidden.active .imperialDiv").find("input,select")[3].value;
      var tg = parseFloat($(".product-info.hidden.active .imperialDiv").find("input")[2].value / 12);

      var twidth = parseInt(twid) + parseFloat((twidi / 12));
      var tlength = parseInt(tlen) + parseFloat((tleni / 12));
      var tile = Math.floor((twidth * tlength));
      var tot = rsquare / tile;
      //Grout
      var mg = tot * tg;
      var ntile = rsquare - mg;
      var nvalue = ntile / tile;
      //checking remainder
      var reminder = ntile % tile;
      if (reminder == 0) {
        nvalue;
      } else {
        nvalue++;
      }
      if ($(".product-info.hidden.active").find("input ,select")[0].value == "WasteAddon") {
        let wasteA = $(".product-info.hidden.active").find("input ,select")[1].value;
        let addon = (nvalue * wasteA) / 100;
        var tottile = Math.ceil(nvalue + addon);
        var tr = document.getElementById('mytable');
        tr.innerHTML += "<tr><td>" + roomNo + "</td><td>" + $("#productTypeSelect").val() + "</td><td>" + roomwidth + " x " + roominch + "</td><td>" + "width" + twid + "x" + twidi + "<br>" + "length " + tlen + " x" + tleni + "</td><td>" + Math.round(tottile) + "</td</tr>";
        access.wasteaddon=wasteA;
      } else {
        access.wasteaddon=($(".product-info.hidden.active").find("input ,select")[0].value);
        var tr = document.getElementById('mytable');
        tr.innerHTML += "<tr><td>" + roomNo + "</td><td>" + $("#productTypeSelect").val() + "</td><td>" + roomwidth + " x " + roominch + "</td><td>" + "width" + twid + "x" + twidi + "<br>" + "length " + tlen + " x" + tleni + "</td><td>" + Math.round(nvalue) + "</td</tr>";

      }
      //adding values to array
      var height ={ width:parseInt(inputs[1].value*12) + parseFloat(inputs[2].value) ,length:parseInt(inputs[4].value*12) + parseFloat(inputs[5].value)};
      var flooring={width:parseInt(twid*12) + parseFloat((twidi)),length:parseInt(tlen*12) + parseFloat((tleni))};
      startPoint=$(".product-info.hidden.active").find("input ,select")[3].value
    access.grout=parseFloat($(".product-info.hidden.active .imperialDiv").find("input")[2].value);
    access.Flooring=($("#productTypeSelect").val());
    access.FlooringProduct=flooring;
    access.RectRoom.push(height)
    access.startPoint=startPoint;
    console.log(access);

    }); //ending rectRoomItem

  }
  //STAIRCASE
  if ($("#productTypeSelect").val() == "Tile" && $(".room-section ").find(".stairItem").length) {
    var room = $(".room-section .stairItem");
    //for-each
    room.each(function() {
        var roomarr=[{room:","},{tilewidth:"",tilelength:""}];
      inputs = $(this).find(".form-control");
    var  startPoint=$(".product-info.hidden.active").find("input ,select")[3].value
      var roomNo = inputs[0].value;
      var sw = parseInt(inputs[1].value) + parseFloat(inputs[2].value / 12);
      var swidth = inputs[1].value;
      var sinch = parseFloat(inputs[2].value);
      var sw = parseInt(inputs[1].value) + parseFloat(inputs[2].value / 12);
      var steps = parseInt(inputs[4].value);
      var tred = parseInt(inputs[5].value) + parseFloat(inputs[6].value/12 );
      var riser = parseInt(inputs[8].value) + parseFloat(inputs[9].value/12 );
      var area = (tred + riser) * sw * steps;
      var twid = $(".product-info.hidden.active .imperialDiv").find("input,select")[0].value;
      var twidi = $(".product-info.hidden.active .imperialDiv").find("input,select")[1].value;
      var tlen = $(".product-info.hidden.active .imperialDiv").find("input,select")[2].value;
      var tleni = $(".product-info.hidden.active .imperialDiv").find("input,select")[3].value;
      var tg = $(".product-info.hidden.active .imperialDiv").find("input")[2].value;
      var twidth = parseInt(twid) + parseFloat((twidi / 12));
      var tlength = parseInt(tlen) + parseFloat((tleni / 12));
      var height= { width:parseInt(inputs[1].value*12) + parseFloat(inputs[2].value),tred:Math.round(parseInt(inputs[5].value*12) + parseFloat(inputs[6].value )),riser:Math.round(parseInt(inputs[8].value*12) + parseFloat(inputs[9].value )),steps:steps};
      var tile = Math.ceil((twidth * tlength));
      var totat = area / tile;
      var gcalc = totat * tg;
      var gminus = area - gcalc;
      var finalval = Math.round(gminus / tile);
      var reminder = finalval % tile;
      var tvalue = document.getElementById("tile");
      if (reminder == 0) {

      } else {
        finalval++;
      }
      // for waste addon
      if ($(".product-info.hidden.active").find("input ,select")[0].value == "WasteAddon") {
        let wasteA = $(".product-info.hidden.active").find("input ,select")[1].value;
        let addon = (finalval * wasteA) / 100;
        var tottile = Math.ceil(addon + finalval);
        var tr = document.getElementById('mytable');
        tr.innerHTML += "<tr><td>" + roomNo + "</td><td>" + $("#productTypeSelect").val() + "</td><td>" + swidth + " x " + sinch + "</td><td>" + "width" + twid + "x" + twidi + "<br>" + "length " + tlen + " x" + tleni + "</td><td>" + Math.round(tottile) + "</td</tr>";
    access.wasteaddon=wasteA;
      }
      //if user didnt add wastage this will be printed
      else {
        access.wasteaddon=($(".product-info.hidden.active").find("input ,select")[0].value);
        var tr = document.getElementById('mytable');
        tr.innerHTML += "<tr><td>" + roomNo + "</td><td>" + $("#productTypeSelect").val() + "</td><td>" + swidth + " x " + sinch + "</td><td>" + "width" + twid + "x" + twidi + "<br>" + "length " + tlen + " x" + tleni + "</td><td>" + Math.round(finalval) + "</td</tr>";

      }
      //adding values into the array
        var flooring={width:parseInt(twid*12) + parseFloat((twidi)),length:parseInt(tlen*12) + parseFloat((tleni))};
        access.grout=parseFloat($(".product-info.hidden.active .imperialDiv").find("input")[2].value);
      access.Flooring=$("#productTypeSelect").val();
      access.startPoint=startPoint;
      access.stairs.push(height);
      access.FlooringProduct=flooring;
      console.log(access);


    }); //ending staircase
  }
  // Starting Lshape and convex
  if ($("#productTypeSelect").val() == "Tile" && $(".room-section ").find(".LShapeRoomItem").length) {

    //room width and length calc
    var room = $(".room-section .LShapeRoomItem");
    room.each(function() {
      var inputs = $(this).find(".form-control");
      var roomNo = inputs[0].value;
      var lsw1 = parseInt(inputs[1].value) + ". " + parseFloat(inputs[2].value);
      var lsl1 = parseInt(inputs[4].value) + "." + parseFloat(inputs[5].value);
      var lsw2 = parseInt(inputs[7].value) + "." + parseFloat(inputs[8].value);
      var lsl2 = parseInt(inputs[10].value) + "." + parseFloat(inputs[11].value);


      var lshapew1 = parseInt(inputs[1].value) + parseFloat(inputs[2].value / 12);
      var lshapel1 = parseInt(inputs[4].value) + parseFloat(inputs[5].value / 12);
      var lshapew2 = parseInt(inputs[7].value) + parseFloat(inputs[8].value / 12);
      var lshapel2 = parseInt(inputs[10].value) + parseFloat(inputs[11].value / 12);
      var height={width_len1:{width:parseInt(inputs[1].value*12) + parseFloat(inputs[2].value),length:parseInt(inputs[4].value*12) + parseFloat(inputs[5].value)} ,width_len2:{width:parseInt(inputs[7].value*12) + parseFloat(inputs[8].value),length:parseInt(inputs[10].value*12) + parseFloat(inputs[11].value )} };
      var totwl1 = Math.round(lshapew1 * lshapel1);
      var totwl2 = Math.round(lshapew2 * lshapel2);
      var totalsize = Math.round(totwl1 + totwl2);
      //tile calculate
      var twid = $(".product-info.hidden.active .imperialDiv").find("input,select")[0].value;
      var twidi = $(".product-info.hidden.active .imperialDiv").find("input,select")[1].value;
      var tlen = $(".product-info.hidden.active .imperialDiv").find("input,select")[2].value;
      var tleni = $(".product-info.hidden.active .imperialDiv").find("input,select")[3].value;
      var tg = $(".product-info.hidden.active .imperialDiv").find("input")[2].value / 12;
      var twidth = parseInt(twid) + parseFloat((twidi / 12));
      var tlength = parseInt(tlen) + parseFloat((tleni / 12));
      var tile = Math.ceil((twidth * tlength));
      var lshapecal = totalsize / tile;
      var gcalc = lshapecal * tg;
      var gminus = totalsize - gcalc;
      var finalval = Math.round(gminus / tile);
      var reminder = finalval % tile;
      if (reminder == 0) {
        finalval;

      } else {

        finalval++;

      }
      if ($(".product-info.hidden.active").find("input ,select")[0].value == "WasteAddon") {
        let wasteA = $(".product-info.hidden.active").find("input ,select")[1].value;
        let addon = (finalval * wasteA) / 100;
        tottile = finalval + addon;
        var tr = document.getElementById('mytable');
        tr.innerHTML += "<tr><td>" + roomNo + "</td><td>" + $("#productTypeSelect").val() + "</td><td>" + lsw1 + " x " + lsl1 + "<br> " + lsw2 + "x" + lsl2 + "</td><td>" + "width" + twid + "x" + twidi + "<br>" + "length " + tlen + " x" + tleni + "</td><td>" + Math.round(tottile) + "</td</tr>";
            access.wasteaddon=wasteA;

      } else {
        access.wasteaddon=($(".product-info.hidden.active").find("input ,select")[0].value);
        var tr = document.getElementById('mytable');
        tr.innerHTML += "<tr><td>" + roomNo + "</td><td>" + $("#productTypeSelect").val() + "</td><td>" + lsw1 + " x " + lsl1 + "<br> " + lsw2 + "x" + lsl2 + "</td><td>" + "width" + twid + "x" + twidi + "<br>" + "length " + tlen + " x" + tleni + "</td><td>" + Math.round(finalval) + "</td</tr>";

      }
      //adding values into the array
      var  startPoint=$(".product-info.hidden.active").find("input ,select")[3].value
      var flooring={width:parseInt(twid*12) + parseFloat((twidi)),length:parseInt(tlen*12) + parseFloat((tleni))};
        access.grout=parseFloat($(".product-info.hidden.active .imperialDiv").find("input")[2].value);
      access.Flooring=$("#productTypeSelect").val();
      access.startPoint=startPoint;
      access.polygon.push(height);
      access.FlooringProduct=flooring;
      console.log(access);
    }); //ending lshape
  }
  if ($("#productTypeSelect").val() == "Tile" && $(".room-section ").find(".convexRoomItem").length) {
    var room = $(".room-section .convexRoomItem");
    room.each(function() {
      var inputs = $(this).find(".form-control");
      var roomNo = inputs[0].value;
      var lsw1 = parseInt(inputs[1].value) + "x " + parseFloat(inputs[2].value);
      var lsl1 = parseInt(inputs[4].value) + "x" + parseFloat(inputs[5].value);
      var lsw2 = parseInt(inputs[7].value) + "x" + parseFloat(inputs[8].value);
      var lsl2 = parseInt(inputs[10].value) + "x" + parseFloat(inputs[11].value);
        var height={width_len1:{width:parseInt(inputs[1].value*12) + parseFloat(inputs[2].value),length:parseInt(inputs[4].value*12) + parseFloat(inputs[5].value)} ,width_len2:{width:parseInt(inputs[7].value*12) + parseFloat(inputs[8].value),length:parseInt(inputs[10].value*12) + parseFloat(inputs[11].value )} };




      var lshapew1 = parseInt(inputs[1].value) + parseFloat(inputs[2].value / 12);
      var lshapel1 = parseInt(inputs[4].value) + parseFloat(inputs[5].value / 12);
      var lshapew2 = parseInt(inputs[7].value) + parseFloat(inputs[8].value / 12);
      var lshapel2 = parseInt(inputs[10].value) + parseFloat(inputs[11].value / 12);
      var totwl1 = Math.round(lshapew1 * lshapel1);
      var totwl2 = Math.round(lshapew2 * lshapel2);
      var totalsize = Math.round(totwl1 + totwl2);
      //tile calculate
      var twid = $(".product-info.hidden.active .imperialDiv").find("input,select")[0].value;
      var twidi = $(".product-info.hidden.active .imperialDiv").find("input,select")[1].value;
      var tlen = $(".product-info.hidden.active .imperialDiv").find("input,select")[2].value;
      var tleni = $(".product-info.hidden.active .imperialDiv").find("input,select")[3].value;
      var tg = $(".product-info.hidden.active .imperialDiv").find("input")[2].value / 12;
      var twidth = parseInt(twid) + parseFloat((twidi / 12));
      var tlength = parseInt(tlen) + parseFloat((tleni / 12));
      var tile = Math.ceil((twidth * tlength));
      var lshapecal = totalsize / tile;
      var gcalc = lshapecal * tg;
      var gminus = totalsize - gcalc;
      var finalval = Math.round(gminus / tile);
      var reminder = finalval % tile;
      if (reminder == 0) {
        finalval;

      } else {

        finalval++;

      }
      if ($(".product-info.hidden.active").find("input ,select")[0].value == "WasteAddon") {
        let wasteA = $(".product-info.hidden.active").find("input ,select")[1].value;
        let addon = (finalval * wasteA) / 100;
        tottile = finalval + addon;
        access.wasteaddon=wasteA;
        var tr = document.getElementById('mytable');
        tr.innerHTML += "<tr><td>" + roomNo + "</td><td>" + $("#productTypeSelect").val() + "</td><td>" + lsw1 + " x " + lsl1 + "<br> " + lsw2 + "x" + lsl2 + "</td><td>" + "width" + twid + "x" + twidi + "<br>" + "length " + tlen + " x" + tleni + "</td><td>" + Math.round(tottile) + "</td</tr>";


      } else {
        access.wasteaddon=($(".product-info.hidden.active").find("input ,select")[0].value);
        var tr = document.getElementById('mytable');
        tr.innerHTML += "<tr><td>" + roomNo + "</td><td>" + $("#productTypeSelect").val() + "</td><td>" + lsw1 + " x " + lsl1 + "<br> " + lsw2 + "x" + lsl2 + "</td><td>" + "width" + twid + "x" + twidi + "<br>" + "length " + tlen + " x" + tleni + "</td><td>" + Math.round(finalval) + "</td</tr>";

      }
      //adding values into the array
      var  startPoint=$(".product-info.hidden.active").find("input ,select")[3].value
        var flooring={width:parseInt(twid*12) + parseFloat((twidi)),length:parseInt(tlen*12) + parseFloat((tleni))};
        access.grout=parseFloat($(".product-info.hidden.active .imperialDiv").find("input")[2].value);
      access.Flooring=$("#productTypeSelect").val();
      access.startPoint=startPoint;
      access.polygon.push(height);
      access.FlooringProduct=flooring;
      console.log(access);

    });
  }
    if ($("#productTypeSelect").val() == "Tile" && $(".room-section ").find(".concaveRoomItem").length) {
      var room = $(".room-section .concaveRoomItem");
      room.each(function() {
        var inputs = $(this).find(".form-control");
        var roomNo = inputs[0].value;
        var lsw1 = parseInt(inputs[1].value) + " . " + parseFloat(inputs[2].value);
        var lsl1 = parseInt(inputs[4].value) + ". " + parseFloat(inputs[5].value);
        var lsw2 = parseInt(inputs[7].value) + " ." + parseFloat(inputs[8].value);
        var lsl2 = parseInt(inputs[10].value) + " ." + parseFloat(inputs[11].value);


        var lshapew1 = parseInt(inputs[1].value) + parseFloat(inputs[2].value / 12);
        var lshapel1 = parseInt(inputs[4].value) + parseFloat(inputs[5].value / 12);
        var lshapew2 = parseInt(inputs[7].value) + parseFloat(inputs[8].value / 12);
        var lshapel2 = parseInt(inputs[10].value) + parseFloat(inputs[11].value / 12);
        var totwl1 = Math.round(lshapew1 * lshapel1);
        console.log(totwl1);
        var totwl2 = Math.round(lshapew2 * lshapel2);
        console.log(totwl2);
        var totalsize = Math.round(totwl1 - totwl2);
        //tile calculate
        var twid = $(".product-info.hidden.active .imperialDiv").find("input,select")[0].value;
        var twidi = $(".product-info.hidden.active .imperialDiv").find("input,select")[1].value;
        var tlen = $(".product-info.hidden.active .imperialDiv").find("input,select")[2].value;
        var tleni = $(".product-info.hidden.active .imperialDiv").find("input,select")[3].value;
        var tg = $(".product-info.hidden.active .imperialDiv").find("input")[2].value / 12;
          var height={width_len1:{width:parseInt(inputs[1].value*12) + parseFloat(inputs[2].value),length:parseInt(inputs[4].value*12) + parseFloat(inputs[5].value)} ,width_len2:{width:parseInt(inputs[7].value*12) + parseFloat(inputs[8].value),length:parseInt(inputs[10].value*12) + parseFloat(inputs[11].value )} };

        var twidth = parseInt(twid) + parseFloat((twidi / 12));
        var tlength = parseInt(tlen) + parseFloat((tleni / 12));
        var tile = Math.ceil((twidth * tlength));
        var lshapecal = totalsize / tile;
        var gcalc = lshapecal * tg;
        var gminus = totalsize - gcalc;
        var finalval = Math.round(gminus / tile);
        var reminder = finalval % tile;
        if (reminder == 0) {
          finalval;

        } else {

          finalval++;

        }
        if ($(".product-info.hidden.active").find("input ,select")[0].value == "WasteAddon") {
          let wasteA = $(".product-info.hidden.active").find("input ,select")[1].value;
          let addon = (finalval * wasteA) / 100;
          tottile = finalval + addon;
          access.wasteaddon=wasteA;
          var tr = document.getElementById('mytable');
          tr.innerHTML += "<tr><td>" + roomNo + "</td><td>" + $("#productTypeSelect").val() + "</td><td>" + lsw1 + " x " + lsl1 + "<br> " + lsw2 + "x" + lsl2 + "</td><td>" + "width" + twid + "x" + twidi + "<br>" + "length " + tlen + " x" + tleni + "</td><td>" + Math.round(tottile) + "</td</tr>";


        } else {
          access.wasteaddon=($(".product-info.hidden.active").find("input ,select")[0].value);s
          var tr = document.getElementById('mytable');
          tr.innerHTML += "<tr><td>" + roomNo + "</td><td>" + $("#productTypeSelect").val() + "</td><td>" + lsw1 + " x " + lsl1 + "<br> " + lsw2 + "x" + lsl2 + "</td><td>" + "width" + twid + "x" + twidi + "<br>" + "length " + tlen + " x" + tleni + "</td><td>" + Math.round(finalval) + "</td</tr>";

        }
        var  startPoint=$(".product-info.hidden.active").find("input ,select")[3].value
          var flooring={width:parseInt(twid*12) + parseFloat((twidi)),length:parseInt(tlen*12) + parseFloat((tleni))};
          access.grout=parseFloat($(".product-info.hidden.active .imperialDiv").find("input")[2].value);
        access.Flooring=$("#productTypeSelect").val();
        access.startPoint=startPoint;
        access.polygon.push(height);
        access.FlooringProduct=flooring;
        console.log(access);
      });
    }
    //AJAX REQUEST
    $.post("demo_test_post.asp",
  {
    access
  },
  function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
});
