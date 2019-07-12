$("document").ready(function() {
  var arr = [];
  var flag = 0;
  total = 0;

  $("#btnSubmit").click(function tiles() {
    // console.log($(".room-section").html());
    if ($(".room-section").html() == 0) {
      alert("select any one the image");
      //flag=0;
    }
    //if (flag == $(".room-section > div").length) {
    //  alert("select another room")
    if ($("#productTypeSelect").val() == "Tile" && $(".room-section ").find(".rectRoomItem ").length) {
      alert("you have selected");
      //room width and length calc
      var rwidth = $(".room-section .imperialDiv").find("input,select")[0].value;
      var rinch = $(".room-section .imperialDiv").find("input,select")[1].value;
      var rlength = $(".room-section .imperialDiv").find("input,select")[2].value;
      var rlinch = $(".room-section .imperialDiv").find("input,select")[3].value;
      var roomw = parseInt(rwidth) + parseFloat((rlinch / 12));
      var rooml = parseInt(rlength) + parseFloat((rlinch / 12));
      var rsquare = Math.ceil((roomw * rooml));
      console.log(rsquare);
      console.log("the square value is:" + rsquare);
      //tile calc
      var twid = $(".product-info.hidden.active .imperialDiv").find("input,select")[0].value;
      var twidi = $(".product-info.hidden.active .imperialDiv").find("input,select")[1].value;
      var tlen = $(".product-info.hidden.active .imperialDiv").find("input,select")[2].value;
      var tleni = $(".product-info.hidden.active .imperialDiv").find("input,select")[3].value;
      var tg = $(".product-info.hidden.active .imperialDiv").find("input")[2].value;
      var twidth = parseInt(twid) + parseFloat((twidi / 12));
      var tlength = parseInt(tlen) + parseFloat((tleni / 12));
      var tile = Math.floor((twidth * tlength));
      var tot = rsquare / tile;
      if($(".product-info.hidden.active").find("input ,select")[0].value=="WasteAddon")
      {
        let wasteA=$(".product-info.hidden.active").find("input ,select")[1].value;
        let addon=(tot*wasteA)/100;
        var tottile=Math.ceil(addon+tot);
        arr.push(tottile);

      }
      alert(tot);
      var tvalue = document.getElementById("tile");
      tvalue.innerHTML = "";
      for (let i = 0; i < arr.length; i++) {
        var r = 1;

        console.log("hai one" + arr[i]);
          console.log(i, arr.length);

        tvalue.innerHTML += "Required tiles for your room is:" + Math.round(arr[i]) + "</br>";
        total += Math.round(arr[i]);
      }
      tvalue.innerHTML += "Total tiles for your selected rooms are:" + (total);

      //Grout
    /*  var mg = tot * tg;
      var ntile = rsquare - mg;
      console.log(arr);
      var nvalue = ntile / tile;
      //checking remainder
      var reminder = ntile % tile;
      var tvalue = document.getElementById("tile");
      if (reminder == 1 || reminder <= tile) {
        flag++;
        console.log("rem" + flag);
        console.log("roomval" + $(".room-section > div").length);

        arr.push(nvalue++)

      } else {

        flag++;
        arr.push(nvalue);
        console.log(arr);

      }
      tvalue.innerHTML = "";
      for (let i = 0; i < arr.length; i++) {
        var r = 1;



        console.log("hai one" + arr[i]);
        console.log(i, arr.length);

        tvalue.innerHTML += "Required tiles for your room is:" + Math.round(arr[i]) + "</br>";
        total += Math.round(arr[i]);

        "\n";
      }
      tvalue.innerHTML += "Total tiles for your selected rooms are:" + (total);

  */  } else if ($("#productTypeSelect").val() == "Tile" && $(".room-section ").find(".LShapeRoomItem").length || $(".room-section ").find(".convexRoomItem").length) {
      //room width and length calc
      var lshapew1 = parseInt($(".room-section .imperialDiv").find("input,select")[0].value) + parseFloat($(".room-section .imperialDiv").find("input,select")[1].value / 12);
      console.log(lshapew1);
      var lshapel1 = parseInt($(".room-section .imperialDiv").find("input,select")[2].value) + parseFloat($(".room-section .imperialDiv").find("input,select")[3].value / 12);
      var lshapew2 = parseInt($(".room-section .imperialDiv").find("input,select")[4].value) + parseFloat($(".room-section .imperialDiv").find("input,select")[5].value / 12);
      var lshapel2 = parseInt($(".room-section .imperialDiv").find("input,select")[6].value) + parseFloat($(".room-section .imperialDiv").find("input,select")[7].value / 12);
      var totwl1 = Math.round(lshapew1 * lshapel1);
      var totwl2 = Math.round(lshapew2 * lshapel2);
      var totalsize = Math.round(totwl1 + totwl2);
      //tile calculate
      var twid = $(".product-info.hidden.active .imperialDiv").find("input,select")[0].value;
      var twidi = $(".product-info.hidden.active .imperialDiv").find("input,select")[1].value;
      var tlen = $(".product-info.hidden.active .imperialDiv").find("input,select")[2].value;
      var tleni = $(".product-info.hidden.active .imperialDiv").find("input,select")[3].value;
      var tg = $(".product-info.hidden.active .imperialDiv").find("input")[2].value;

      var twidth = parseInt(twid) + parseFloat((twidi / 12));
      var tlength = parseInt(tlen) + parseFloat((tleni / 12));
      var tile = Math.ceil((twidth * tlength));
      var lshapecal = totalsize / tile;
      /*
      var gcalc = lshapecal * tg;
      var gminus = totalsize - gcalc;
      var finalval = Math.round(gminus / tile);
      var reminder = finalval % tile;
      var tvalue = document.getElementById("tile");
      if (reminder == 1 || reminder <= tile) {
        alert(finalval);

        flag++;
        console.log("rem" + flag);
        console.log("roomval" + $(".room-section > div").length);

        arr.push(finalval)

      } else {
        alert(finalval);
        arr.push(finalval++);
        console.log(arr);

      }
      */

      if($(".product-info.hidden.active").find("input ,select")[0].value=="WasteAddon")
      {
        let wasteA=$(".product-info.hidden.active").find("input ,select")[1].value;
        let addon=(totalsize*wasteA)/100;
        alert(addon);
      }




      tvalue.innerHTML = "";
      for (let i = 0; i < arr.length; i++) {
        var r = 1;
        console.log("hai one" + arr[i]);
        console.log(i, arr.length);
        tvalue.innerHTML += "Required tiles for your room is:" + Math.round(arr[i]) + "</br>";
        total += Math.round(arr[i]);
      }
      tvalue.innerHTML += "Total tiles for your selected rooms are:" + (total);


    } else if ($("#productTypeSelect").val() == "Tile" && $(".room-section ").find(".concaveRoomItem").length) {
      var lshapew1 = parseInt($(".room-section .imperialDiv").find("input,select")[0].value) + parseFloat($(".room-section .imperialDiv").find("input,select")[1].value / 12);
      console.log(lshapew1);
      var lshapel1 = parseInt($(".room-section .imperialDiv").find("input,select")[2].value) + parseFloat($(".room-section .imperialDiv").find("input,select")[3].value / 12);
      var lshapew2 = parseInt($(".room-section .imperialDiv").find("input,select")[4].value) + parseFloat($(".room-section .imperialDiv").find("input,select")[5].value / 12);
      var lshapel2 = parseInt($(".room-section .imperialDiv").find("input,select")[6].value) + parseFloat($(".room-section .imperialDiv").find("input,select")[7].value / 12);
      var totwl1 = Math.round(lshapew1 * lshapel1);
      var totwl2 = Math.round(lshapew2 * lshapel2);
      var totalsize = Math.round(totwl1 - totwl2);

      //tile calculate
      var twid = $(".product-info.hidden.active .imperialDiv").find("input,select")[0].value;
      var twidi = $(".product-info.hidden.active .imperialDiv").find("input,select")[1].value;
      var tlen = $(".product-info.hidden.active .imperialDiv").find("input,select")[2].value;
      var tleni = $(".product-info.hidden.active .imperialDiv").find("input,select")[3].value;
      var tg = $(".product-info.hidden.active .imperialDiv").find("input")[2].value;
      var twidth = parseInt(twid) + parseFloat((twidi / 12));
      var tlength = parseInt(tlen) + parseFloat((tleni / 12));
      var tile = Math.ceil((twidth * tlength));
      var lshapecal = totalsize / tile;
      if($(".product-info.hidden.active").find("input ,select")[0].value=="WasteAddon")
      {
        let wasteA=$(".product-info.hidden.active").find("input ,select")[1].value;
        let addon=(lshapecal*wasteA)/100;
        alert(addon);
      }

            tvalue.innerHTML = "";
            for (let i = 0; i < arr.length; i++) {

              tvalue.innerHTML += "Required tiles for your room is:" + Math.round(arr[i]) + "</br>";
              total += Math.round(arr[i]);
            }
            tvalue.innerHTML += "Total tiles for your selected rooms are:" + (total);
      /*
      var gcalc = lshapecal * tg;
      var gminus = totalsize - gcalc;
      var finalval = Math.round(gminus / tile);
      var reminder = finalval % tile;
      var tvalue = document.getElementById("tile");
      if (reminder == 0) {
        alert(finalval);
        arr.push(finalval)

      } else {
        alert(finalval);
        arr.push(finalval++);
        console.log(arr);

      }
      tvalue.innerHTML = "";
      for (let i = 0; i < arr.length; i++) {
        var r = 1;



        console.log("hai one" + arr[i]);
        console.log(i, arr.length);

        tvalue.innerHTML += "Required tiles for your room is:" + Math.round(arr[i]) + "</br>";
        total += Math.round(arr[i]);
      }
      tvalue.innerHTML += "Total tiles for your selected rooms are:" + (total);
      */

    } else if ($("#productTypeSelect").val() == "Tile" && $(".room-section ").find(".stairItem").length) {
      var sw= parseInt($(".room-section ").find(".stairItem").find("input , select")[1].value) + parseFloat($(".room-section ").find(".stairItem").find("input , select")[2].value/12);
      var steps=parseInt($(".room-section ").find(".stairItem").find("input , select")[4].value);
      var tred=parseInt($(".room-section ").find(".stairItem").find("input , select")[5].value) + parseFloat($(".room-section ").find(".stairItem").find("input , select")[6].value/12) ;
      var riser=parseInt($(".room-section ").find(".stairItem").find("input , select")[8].value) + parseFloat($(".room-section ").find(".stairItem").find("input , select")[9].value/12);
      var area=(tred+riser)*sw*steps;
      console.log(area);
      var twid = $(".product-info.hidden.active .imperialDiv").find("input,select")[0].value;
      var twidi = $(".product-info.hidden.active .imperialDiv").find("input,select")[1].value;
      var tlen = $(".product-info.hidden.active .imperialDiv").find("input,select")[2].value;
      var tleni = $(".product-info.hidden.active .imperialDiv").find("input,select")[3].value;
      var tg = $(".product-info.hidden.active .imperialDiv").find("input")[2].value;
      var twidth = parseInt(twid) + parseFloat((twidi / 12));
      var tlength = parseInt(tlen) + parseFloat((tleni / 12));
      var tile = Math.ceil((twidth * tlength));
      var totat = area / tile;
      var gcalc = totat * tg;
      var gminus = area - gcalc;
      var finalval = Math.round(gminus / tile);
      var reminder = finalval % tile;
      var tvalue = document.getElementById("tile");
      if (reminder == 0) {
        alert(finalval);
        arr.push(finalval)

      } else {
        alert(finalval);
        arr.push(finalval++);
        console.log(arr);

      }
      tvalue.innerHTML = "";
      for (let i = 0; i < arr.length; i++) {
        var r = 1;



        console.log("hai one" + arr[i]);
        console.log(i, arr.length);

        tvalue.innerHTML += "Required tiles for your room is:" + Math.round(arr[i]) + "</br>";
        total += Math.round(arr[i]);


}
  tvalue.innerHTML += "Total tiles for your selected rooms are:" + (total);
  arr=[];
}

  });
});
