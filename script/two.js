(function() {
    function n(n, t) {
        return parseInt(n) + "'" + t + "&quot;"
    }

    function r(n, t) {
        return e(n, t, 1)
    }

    function f(n, t) {
        return e(n, t, 2)
    }

    function e(n, t, i) {
        var l = $("#measureSystemSelect").val(),
            a = l == "Imperial",
            h, c;
        if (a) {
            var o = Math.floor(n / 12),
                r = n % 12,
                s = Math.floor(t / 12),
                u = t % 12,
                f, e;
            switch (i) {
                case 1:
                    f = o + s + Math.floor((r + u) / 12);
                    e = (r + u) % 12;
                    break;
                case 2:
                    r >= u ? (f = o - s, e = r - u) : (f = o - s - 1, e = r + 12 - u)
            }
            return f + "'" + e + '"'
        }
        h = parseFloat((n * .0254).toFixed(2));
        c = parseFloat((t * .0254).toFixed(2));
        switch (i) {
            case 1:
                return (h + c).toFixed(2);
            case 2:
                return (h - c).toFixed(2)
        }
    }

    function s(n) {
        var t = "<M2Script",
            u, r, i, f, e;
        for (u in n.setting) t += " " + u + '="' + n.setting[u] + '"';
        t += "><FloorProduct";
        for (u in n.floorProduct) t += " " + u + '="' + n.floorProduct[u] + '"';
        t += "/>";
        r = n.floorProduct;
        for (f in n.rectRooms) i = n.rectRooms[f], t += '<RectRoom RoomName="' + i.RoomName + '" Width="' + i.Width + '" Length="' + i.Length + '"', typeof r.LayoutDirection != "undefined" && (t += ' LayoutDirection="' + r.LayoutDirection + '" StartPoint="' + r.StartPoint + '"'), t += "/>";
        for (f in n.polygonRooms) i = n.polygonRooms[f], t += '<PolygonRoom RoomName="' + i.RoomName + '" Points="' + i.Points + '"', typeof r.LayoutDirection != "undefined" && (t += ' LayoutDirection="' + r.LayoutDirection + '" StartPoint="' + r.StartPoint + '"'), t += "/>";
        for (f in n.stairs) e = n.stairs[f], t += '<Stairway CoveringStyle="Waterfall" StairName="' + e.StairName + '" ><StairUnit UnitStyle="Regular" StepCount="' + e.StepCount + '" StairWidth="' + e.StairWidth + '" TreadWidth="' + e.TreadWidth + '" RiseHeight="' + e.RiseHeight + '" />', t += "<\/Stairway>";
        return t + "<\/M2Script>"
    }

    function u(n) {
        n.each(function() {
            var i = $(this),
                o = i.find("[data-id=resizable1]"),
                s = i.find("[data-id=resizable2]"),
                n = i.find(".input-section"),
                r, u, f, e;
            $("#measureSystemSelect").val() == "Imperial" ? (r = n.find("input:eq(1)").val() * 12 + parseInt(n.find("select:eq(0)").val()), u = n.find("input:eq(3)").val() * 12 + parseInt(n.find("select:eq(1)").val()), f = n.find("input:eq(5)").val() * 12 + parseInt(n.find("select:eq(2)").val()), e = n.find("input:eq(7)").val() * 12 + parseInt(n.find("select:eq(3)").val()), $(".form-table").find(".area-unit").html("SF")) : (r = parseInt(n.find("input:eq(2)").val() / .0254), u = parseInt(n.find("input:eq(4)").val() / .0254), f = parseInt(n.find("input:eq(6)").val() / .0254), e = parseInt(n.find("input:eq(8)").val() / .0254), $(".form-table").find(".area-unit").html("M" + "2".sup()));
            t(i);
            o.width(r);
            o.height(u);
            s.width(f);
            s.height(e)
        });
        n.find(".resizable").trigger("resize")
    }

    function t(n) {
        var r, u, f, e, o, t = n.find(".input-section");
        if ($("#measureSystemSelect").val() == "Imperial") var r = t.find("input:eq(1)").val() * 1 + t.find("select:eq(0)").val() / 12,
            u = t.find("input:eq(3)").val() * 1 + t.find("select:eq(1)").val() / 12,
            f = t.find("input:eq(5)").val() * 1 + t.find("select:eq(2)").val() / 12,
            e = t.find("input:eq(7)").val() * 1 + t.find("select:eq(3)").val() / 12;
        else var r = t.find("input:eq(2)").val() * 1,
            u = t.find("input:eq(4)").val() * 1,
            f = t.find("input:eq(6)").val() * 1,
            e = t.find("input:eq(8)").val() * 1;
        o = n.hasClass("concaveRoomItem") ? (r * u - f * e).toFixed(2) : (r * u + f * e).toFixed(2);
        n.find(".area-value").html(o);
        i()
    }

    function i() {
        var n = 0;
        $(".form-table .rectRoomItem").each(function() {
            $this = $(this);
            var t, i;
            $("#measureSystemSelect").val() == "Imperial" ? (t = $this.find("input:eq(1)").val() * 1 + $this.find("select:eq(0)").val() / 12, i = $this.find("input:eq(3)").val() * 1 + $this.find("select:eq(1)").val() / 12) : (t = $this.find("input:eq(2)").val() * 1, i = $this.find("input:eq(4)").val() * 1);
            n += t * i
        });
        $(".form-table .LShapeRoomItem, .form-table .convexRoomItem").find(".input-section").each(function() {
            $this = $(this);
            var t, i, r;
            $("#measureSystemSelect").val() == "Imperial" ? (t = $this.find("input:eq(1)").val() * 1 + $this.find("select:eq(0)").val() / 12, i = $this.find("input:eq(3)").val() * 1 + $this.find("select:eq(1)").val() / 12, r = $this.find("input:eq(5)").val() * 1 + $this.find("select:eq(2)").val() / 12, length2 = $this.find("input:eq(7)").val() * 1 + $this.find("select:eq(3)").val() / 12) : (t = $this.find("input:eq(2)").val() * 1, i = $this.find("input:eq(4)").val() * 1, r = $this.find("input:eq(6)").val() * 1, length2 = $this.find("input:eq(8)").val() * 1);
            n += t * i + r * length2
        });
        $(".form-table .concaveRoomItem").find(".input-section").each(function() {
            $this = $(this);
            var t, i, r;
            $("#measureSystemSelect").val() == "Imperial" ? (t = $this.find("input:eq(1)").val() * 1 + $this.find("select:eq(0)").val() / 12, i = $this.find("input:eq(3)").val() * 1 + $this.find("select:eq(1)").val() / 12, r = $this.find("input:eq(5)").val() * 1 + $this.find("select:eq(2)").val() / 12, length2 = $this.find("input:eq(7)").val() * 1 + $this.find("select:eq(3)").val() / 12) : (t = $this.find("input:eq(2)").val() * 1, i = $this.find("input:eq(4)").val() * 1, r = $this.find("input:eq(6)").val() * 1, length2 = $this.find("input:eq(8)").val() * 1);
            n += t * i - r * length2
        });
        $(".form-table .stairItem").each(function() {
            $this = $(this);
            var t, u, i, r;
            $("#measureSystemSelect").val() == "Imperial" ? (t = $this.find("input:eq(1)").val() * 1 + $this.find("select:eq(0)").val() / 12, i = $this.find("input:eq(4)").val() * 1 + $this.find("select:eq(1)").val() / 12, r = $this.find("input:eq(6)").val() * 1 + $this.find("select:eq(2)").val() / 12) : (t = $this.find("input:eq(2)").val() * 1, i = $this.find("input:eq(5)").val() * 1, r = $this.find("input:eq(7)").val() * 1);
            u = $this.find("input:eq(3)").val() * 1;
            n += t * (i + r) * u
        });
        $("#total-value").html(n.toFixed(2))
    }

    function h(n) {
        var u = n.index,
            e = "room" + u,
            r = $("#RectRoomTemplate").clone(),
            f, i;
        r.find("input:eq(0)").val("room " + u);
        r.attr("id", e).removeClass("hidden").prependTo($(".room-section"));
        f = r.find(".shape-container").width();
        i = r.find(".resizable");
        i.width(n.width).height(n.height);
        i.resizable({
            handles: n.handles,
            maxHeight: 336,
            maxWidth: f,
            minHeight: 24,
            minWidth: 24
        });
        i.on("resize", function() {
            var n = $(this),
                i = n.parents(".roomItem").find(".input-section"),
                r = n.width(),
                u = n.height(),
                f = Math.floor(r / 12),
                e = r % 12,
                o = Math.floor(u / 12),
                s = u % 12,
                h = (r * .0254).toFixed(2),
                c = (u * .0254).toFixed(2);
            $("#measureSystemSelect").val() == "Imperial" ? (i.find("input:eq(1)").val(f), i.find("select:eq(0)").val(e), i.find("input:eq(3)").val(o), i.find("select:eq(1)").val(s), n.find(".resize-label-n").html(f + "'" + e + '"'), n.find(".resize-label-e").html(o + "'" + s + '"')) : (i.find("input:eq(2)").val(h), i.find("input:eq(4)").val(c), n.find(".resize-label-n").html(h), n.find(".resize-label-e").html(c));
            t(n.parents(".roomItem"))
        });
        i.trigger("resize")
    }

    function o(n) {
        var e = n.index,
            h = "LShape" + e,
            i = $("#LShapeTemplate").clone(),
            f;
        i.find("input:eq(0)").val("room " + e);
        i.attr("id", h).removeClass("hidden").prependTo($(".room-section"));
        var u = i.find(".shape-container").width(),
            o = i.find("[data-id=resizable1]"),
            s = i.find("[data-id=resizable2]");
        o.width(n.l1.width).height(n.l1.height);
        s.width(n.l2.width).height(n.l2.height);
        f = i.find(".resizable");
        f.resizable({
            handles: n.handles,
            maxHeight: 336,
            maxWidth: u,
            minHeight: 24,
            minWidth: 24
        });
        f.on("resize", function() {
            var n = $(this),
                k = n.data("id") == "resizable1",
                y = o.width(),
                p = s.width(),
                f = y + p,
                d;
            f >= u && (k ? n.width(u - p) : n.width(u - y), f = u);
            var i = n.parents(".roomItem").find(".input-section"),
                w = n.width(),
                b = n.height(),
                e = Math.floor(w / 12),
                h = w % 12,
                c = Math.floor(b / 12),
                l = b % 12,
                a = (w * .0254).toFixed(2),
                v = (b * .0254).toFixed(2),
                g = (f * .0254).toFixed(2);
            k ? $("#measureSystemSelect").val() == "Imperial" ? (i.find("input:eq(1)").val(e), i.find("select:eq(0)").val(h), i.find("input:eq(3)").val(c), i.find("select:eq(1)").val(l), n.find(".resize-label-s").html(e + "'" + h + '"'), n.find(".resize-label-w").html(c + "'" + l + '"')) : (i.find("input:eq(2)").val(a), i.find("input:eq(4)").val(v), n.find(".resize-label-s").html(a), n.find(".resize-label-w").html(v)) : $("#measureSystemSelect").val() == "Imperial" ? (i.find("input:eq(5)").val(e), i.find("select:eq(2)").val(h), i.find("input:eq(7)").val(c), i.find("select:eq(3)").val(l), n.find(".resize-label-s").html(e + "'" + h + '"'), n.find(".resize-label-e").html(c + "'" + l + '"')) : (i.find("input:eq(6)").val(a), i.find("input:eq(8)").val(v), n.find(".resize-label-s").html(a), n.find(".resize-label-e").html(v));
            d = n.parents(".shape-container").find(".resize-label-tw");
            d.html(r(y, p)).css({
                left: f / 2 - 20
            });
            t(n.parents(".roomItem"))
        });
        f.trigger("resize")
    }

    function c(n) {
        var s = n.index,
            h = "ConvexShape" + s,
            u = $("#ConvexTemplate").clone();
        u.find("input:eq(0)").val("room " + s);
        u.attr("id", h).removeClass("hidden").prependTo($(".room-section"));
        var e = u.find(".shape-container").width(),
            o = u.find("[data-id=resizable1]"),
            i = u.find("[data-id=resizable2]");
        o.width(n.l1.width).height(n.l1.height);
        i.width(n.l2.width).height(n.l2.height).css("top", n.top + "px");
        o.resizable({
            handles: "e,s,se",
            maxHeight: 336,
            maxWidth: e,
            minHeight: 24,
            minWidth: 24
        });
        i.resizable({
            handles: "e,s,se,n",
            maxHeight: 336,
            maxWidth: e,
            minHeight: 24,
            minWidth: 24
        });
        u.find(".resizable").on("resize", function() {
            var n = $(this),
                w = n.data("id") == "resizable1",
                g = o.width(),
                nt = i.width(),
                s = o.height(),
                h = i.height(),
                b = g + nt;
            b >= e && (w ? n.width(e - nt) : n.width(e - g), b = e);
            w ? s < parseInt(i.css("top")) + h && (s = h + parseInt(i.css("top")), n.height(s)) : (parseInt(n.css("top")) < 0 && n.css("top", "0").height($(this).height()), h + parseInt(n.css("top")) > s && (h = s - parseInt(n.css("top")), n.height(h)));
            var u = n.parents(".roomItem").find(".input-section"),
                k = n.width(),
                d = n.height(),
                c = Math.floor(k / 12),
                l = k % 12,
                a = Math.floor(d / 12),
                v = d % 12,
                y = (k * .0254).toFixed(2),
                p = (d * .0254).toFixed(2),
                tt = (b * .0254).toFixed(2);
            w ? $("#measureSystemSelect").val() == "Imperial" ? (u.find("input:eq(1)").val(c), u.find("select:eq(0)").val(l), u.find("input:eq(3)").val(a), u.find("select:eq(1)").val(v), n.find(".resize-label-s").html(c + "'" + l + '"'), n.find(".resize-label-w").html(a + "'" + v + '"')) : (u.find("input:eq(2)").val(y), u.find("input:eq(4)").val(p), n.find(".resize-label-s").html(y), n.find(".resize-label-w").html(p)) : $("#measureSystemSelect").val() == "Imperial" ? (u.find("input:eq(5)").val(c), u.find("select:eq(2)").val(l), u.find("input:eq(7)").val(a), u.find("select:eq(3)").val(v), n.find(".resize-label-s").html(c + "'" + l + '"'), n.find(".resize-label-e").html(a + "'" + v + '"')) : (u.find("input:eq(6)").val(y), u.find("input:eq(8)").val(p), n.find(".resize-label-s").html(y), n.find(".resize-label-e").html(p));
            n.parents(".shape-container").find(".resize-label-e1").html(r(parseInt(i.css("top")), 0)).css({
                right: "0px",
                top: parseInt(i.css("top")) / 2 - 15
            });
            n.parents(".shape-container").find(".resize-label-e2").html(f(s, parseInt(i.css("top")) + h)).css({
                right: "0px",
                bottom: (s - parseInt(i.css("top")) - h) / 2 - 15
            });
            t(n.parents(".roomItem"))
        });
        u.find(".resizable").trigger("resize")
    }

    function l(n) {
        var s = n.index,
            h = "ConcaveShape" + s,
            u = $("#ConcaveTemplate").clone();
        u.find("input:eq(0)").val("room " + s);
        u.attr("id", h).removeClass("hidden").prependTo($(".room-section"));
        var o = u.find(".shape-container").width(),
            e = u.find("[data-id=resizable1]"),
            i = u.find("[data-id=resizable2]");
        e.width(n.l1.width).height(n.l1.height);
        i.width(n.l2.width).height(n.l2.height).css("top", n.top + "px");
        e.resizable({
            handles: "e,s,se",
            maxHeight: 336,
            maxWidth: o,
            minHeight: 24,
            minWidth: 24
        });
        i.resizable({
            handles: "w,s,n,sw",
            maxHeight: 336,
            maxWidth: o,
            minHeight: 12,
            minWidth: 12
        });
        u.find(".resizable").on("resize", function() {
            var n = $(this),
                tt = n.data("id") == "resizable1",
                s = e.width(),
                c = i.width(),
                l = e.height(),
                a = i.height(),
                it = s + c,
                v, h;
            tt ? (s >= o && (s = o, e.width(s)), s < c + 12 && (s = c + 12, e.width(s)), l < parseInt(i.css("top")) + a && (l = a + parseInt(i.css("top")), n.height(l))) : (c + 12 > s && (c = s - 12, i.width(c)), parseInt(n.css("top")) < 12 && n.css("top", "12px").height($(this).height()), a + parseInt(n.css("top")) + 12 > l && (a = l - parseInt(n.css("top")) - 12, n.height(a)), i.css("left", "auto").css("right", 0));
            e.children(".resize-name").css("left", (s - c) / 2 - 10 + "px").css("right", "auto");
            var u = n.parents(".roomItem").find(".input-section"),
                g = n.width(),
                nt = n.height(),
                y = Math.floor(g / 12),
                p = g % 12,
                w = Math.floor(nt / 12),
                b = nt % 12,
                k = (g * .0254).toFixed(2),
                d = (nt * .0254).toFixed(2),
                rt = (it * .0254).toFixed(2);
            tt ? (v = n.children(".resize-label-s"), h = n.children(".resize-label-w"), $("#measureSystemSelect").val() == "Imperial" ? (u.find("input:eq(1)").val(y), u.find("select:eq(0)").val(p), u.find("input:eq(3)").val(w), u.find("select:eq(1)").val(b), v.html(y + "'" + p + '"'), h.html(w + "'" + b + '"')) : (u.find("input:eq(2)").val(k), u.find("input:eq(4)").val(d), v.html(k), h.html(d))) : (v = n.children(".resize-label-s"), h = n.children(".resize-label-w"), $("#measureSystemSelect").val() == "Imperial" ? (u.find("input:eq(5)").val(y), u.find("select:eq(2)").val(p), u.find("input:eq(7)").val(w), u.find("select:eq(3)").val(b), v.html(y + "'" + p + '"'), h.html(w + "'" + b + '"')) : (u.find("input:eq(6)").val(k), u.find("input:eq(8)").val(d), v.html(k), h.html(d)), h.css("left", "-" + (parseInt(h.width()) + 10) + "px"));
            n.parents(".shape-container").find(".resize-label-e1").html(r(parseInt(i.css("top")), 0)).css({
                right: "0px",
                top: parseInt(i.css("top")) / 2 - 15
            });
            n.parents(".shape-container").find(".resize-label-e2").html(f(l, parseInt(i.css("top")) + a)).css({
                right: "0px",
                bottom: (l - parseInt(i.css("top")) - a) / 2 - 15
            });
            t(n.parents(".roomItem"))
        });
        u.find(".resizable").trigger("resize")
    }
    window.addEventListener("message", function(n) {
        var i, f, u, r, e, t;
        if (n.source == window.parent && n.data == "getEstimate")
            if (i = JSON.parse(sessionStorage.getItem("m2estimate")), i) {
                f = {
                    rooms: [],
                    stairs: []
                };
                u = i.Layer;
                for (e in u.Rooms) r = u.Rooms[e], f.rooms.push({
                    name: r.Name,
                    type: r.Type,
                    area: r.Area,
                    areaSqmm: r.AreaSqmm,
                    perimeter: r.Perimeter,
                    perimeterMm: r.PerimeterMm
                });
                for (e in u.Stairs) t = u.Stairs[e], f.stairs.push({
                    name: t.Name,
                    width: t.Width,
                    widthMm: t.WidthMm,
                    riser: t.Riser,
                    riserMm: t.RiserMm,
                    tread: t.Tread,
                    treadMm: t.TreadMm,
                    steps: t.Steps
                });
                var s = i.ProductEstimates[0].Usage,
                    h = "data:image/png;base64," + i.ImageBase64String,
                    o = {
                        measure: i.MeasureSystem,
                        input: f,
                        img: h,
                        usage: s
                    };
                i.TileCount && (o.tileCount = i.TileCount);
                window.parent.postMessage(o, "*");
                sessionStorage.removeItem("m2estimate")
            } else window.parent.postMessage("m2cancel", "*")
    }, !1);
    $(function() {
        function a(n, t) {
            t == 0 ? (n.removeAttribute("disabled"), n.value = "Email Estimate", t = 30) : (n.setAttribute("disabled", !0), n.value = "Wait(" + t + ")", t--, setTimeout(function() {
                a(n, t)
            }, 1e3))
        }
        var f = window.URL,
            t = {},
            r, e;
        typeof f == "undefined" && (f = window.webkitURL, typeof f == "undefined" && (alert("Your browser is no longer supported. please upgrade to modern browser"), $("#btnSubmit").attr("disabled", "disabled")));
        $(".breadcrumb li a").on("click", function() {
            var n = $(this).parent("li");
            !n.hasClass("disabled") && n.hasClass("disactive") && (n.removeClass("disactive").siblings().addClass("disactive"), $(".form-table").toggle(), $(".estimate-section").toggle())
        });
        $("#productTypeSelect").on("change", function() {
            var n = $(".advance-row .product-info[data-type=" + $(this).val() + "]");
            n.addClass("active").show();
            n.siblings(".product-info").removeClass("active").hide()
        });
        $("#measureSystemSelect").on("change", function() {
            var n = $(this);
            n.val() == "Imperial" ? ($(".imperialDiv").show(), $(".metricDiv").hide()) : n.val() == "Metric" && ($(".metricDiv").show(), $(".imperialDiv").hide());
            $(".room-section .roomItem").each(function() {
                $(this).find(".resizable").trigger("resize")
            })
        });
        $("#tileCalcMethodSelect").on("change", function() {
            var n = $(this);
            n.val() == "WasteAddon" ? n.parent().find(".inner-form-item").removeClass("hidden") : n.parent().find(".inner-form-item").addClass("hidden")
        });
        $(".form-table").on("keydown", ".number-input", function() {
            var n = event.keyCode;
            if (n < 48 || n > 57) {
                if (n >= 96 && n <= 105) return !0;
                if (n != 8 && n != 9 && n != 38 && n != 40) return !1
            }
        }).on("keyup", ".number-input", function() {
            var n = $(this).parents(".roomItem");
            n.find(".resizable").length > 0 ? u(n) : i()
        });
        $(".form-table").on("mouseenter", ".stairHelpLink", function() {
            $(this).parent().find(".stairImg").show(600)
        }).on("mouseleave", ".stairHelpLink", function() {
            $(this).parent().find(".stairImg").hide()
        });
        $("#closeBackBtn").on("click", function() {
            window.parent.postMessage("closeCalculator", "*")
        });
        $(".form-table").on("change", "select", function() {
            var n = $(this).parents(".roomItem");
            n.find(".resizable").length > 0 ? u(n) : i()
        });
        $(".form-table").on("keydown", ".decimal-input", function() {
            var n = event.keyCode;
            if (n < 48 || n > 57) {
                if (n >= 96 && n <= 105) return !0;
                if (n != 8 && n != 9 && n != 190 && n != 110) return !1
            }
        }).on("keyup", ".decimal-input", function() {
            var n = $(this),
                t = n.val(),
                r;
            /^\d+\.?\d{0,2}$/.test(t) == !1 && n.val(t.substring(0, t.length - 1));
            r = n.parents(".roomItem");
            r.find(".resizable").length > 0 ? u(r) : i()
        });
        $("#defaultMeasure").val() == "Metric" ? ($("#measureSystemSelect").val("Metric").trigger("change"), $(".form-table .rectRoomItem input:eq(2)").focus()) : $(".form-table .rectRoomItem input:eq(1)").focus();
        r = 0;
        e = 0;
        $(".linkAddRoom").on("click", function() {
            h({
                index: ++r,
                handles: "e,s,se",
                width: 240,
                height: 144
            })
        });
        $(".linkAddLShape").on("click", function() {
            o({
                index: ++r,
                handles: "e,s,se",
                l1: {
                    width: 120,
                    height: 240
                },
                l2: {
                    width: 144,
                    height: 120
                }
            })
        });
        $(".linkAddLShape2").on("click", function() {
            o({
                index: ++r,
                handles: "e,s,se",
                l1: {
                    width: 144,
                    height: 120
                },
                l2: {
                    width: 120,
                    height: 240
                }
            })
        });
        $(".linkAddConvex").on("click", function() {
            c({
                index: ++r,
                l1: {
                    width: 192,
                    height: 240
                },
                l2: {
                    width: 96,
                    height: 96
                },
                top: 72
            })
        });
        $(".linkAddConcave").on("click", function() {
            l({
                index: ++r,
                l1: {
                    width: 288,
                    height: 240
                },
                l2: {
                    width: 96,
                    height: 96
                },
                top: 72
            })
        });
        $(".linkAddStair").on("click", function() {
            e++;
            var t = "stair" + e,
                n = $("#StairTemplate").clone();
            n.find("input:eq(0)").val("stair " + e);
            n.attr("id", t).removeClass("hidden").prependTo($(".room-section"));
            $("#measureSystemSelect").trigger("change")
        });
        $(".linkAdvanced").on("click", function() {
            var n = $(this).text();
            n == "Advanced" ? ($(this).text("Hide Setting"), $(".advance-row").slideDown()) : ($(this).text("Advanced"), $(".advance-row").slideUp())
        });
        $(".form-table").on("click", ".linkDelete", function() {
            $(this).parents(".roomItem").remove();
            i()
        });
        
        // $("#btnSubmit").on("click", function() {
        //     var u, c;
        //     if (f.revokeObjectURL($("#imgEstimate").src), $("#btnSendEmail").hide(), u = !0, $(".form-table").find("input").each(function() {
        //             if (u) {
        //                 var n = $(this);
        //                 if (n.attr("required") == "required" && !n.is(":hidden") && n.val() == "") {
        //                     n.focus();
        //                     u = !1;
        //                     return
        //                 }
        //             }
        //         }), u && $(".form-table .roomItem").length > 0) {
        //         var h = $("#measureSystemSelect").val(),
        //             e = h == "Imperial",
        //             i = {
        //                 setting: {},
        //                 floorProduct: {},
        //                 rectRooms: [],
        //                 polygonRooms: [],
        //                 stairs: []
        //             },
        //             o = $(".advance-row .product-info.active");
        //         i.floorProduct.ID = o.data("id").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;");
        //         i.floorProduct.Type = o.data("type");
        //         o.find(".form-item, .inner-form-item").each(function() {
        //             var t = $(this),
        //                 u, o, r, f, s, h, c, l;
        //             if (!t.hasClass("hidden") && (u = t.data("key"), u)) {
        //                 o = t.data("type");
        //                 r = "";
        //                 switch (o) {
        //                     case "number":
        //                         e ? (i.floorProduct.Unit = "SF", f = t.find(".imperialDiv .number-input"), f.length == 2 ? (s = $(f[0]).val(), h = $(f[1]).val(), r = n(s, h)) : r = n(0, t.find(".imperialDiv .form-control").val())) : (c = t.find(".metricDiv .decimal-input").val(), r = c);
        //                         break;
        //                     case "percent":
        //                         r = t.find(".form-control").val() + "%";
        //                         break;
        //                     default:
        //                         r = t.find(".item-content .form-control").val()
        //                 }
        //                 l = t.data("setting") == !0;
        //                 l ? i.setting[u] = r : i.floorProduct[u] = r
        //             }
        //         });
        //         $(".form-table").find(".rectRoomItem").each(function() {
        //             var t = $(this),
        //                 f = t.find("input:eq(0)").val(),
        //                 r, u;
        //             if (e) {
        //                 var o = t.find("input:eq(1)").val(),
        //                     s = t.find("select:eq(0)").val(),
        //                     h = t.find("input:eq(3)").val(),
        //                     c = t.find("select:eq(1)").val();
        //                 r = n(o, s);
        //                 u = n(h, c)
        //             } else r = t.find("input:eq(2)").val(), u = t.find("input:eq(4)").val();
        //             i.rectRooms.push({
        //                 RoomName: f,
        //                 Width: r,
        //                 Length: u
        //             })
        //         });
        //         $(".form-table").find(".LShapeRoomItem").each(function() {
        //             var r = $(this),
        //                 t = r.find(".shape-container").height() / 12 * 304.8,
        //                 c = r.find("input:eq(0)").val(),
        //                 n = [],
        //                 f = r.find("[data-id=resizable1]"),
        //                 e = r.find("[data-id=resizable2]"),
        //                 u = f.width() * 25.4,
        //                 o = f.height() * 25.4,
        //                 s = e.width() * 25.4,
        //                 h = e.height() * 25.4;
        //             n.push("0," + (t - o).toFixed(2));
        //             n.push(u.toFixed(2) + "," + (t - o).toFixed(2));
        //             n.push(u.toFixed(2) + "," + (t - h).toFixed(2));
        //             n.push((u + s).toFixed(2) + "," + (t - h).toFixed(2));
        //             n.push((u + s).toFixed(2) + "," + t.toFixed(2));
        //             n.push("0," + t.toFixed(2));
        //             i.polygonRooms.push({
        //                 RoomName: c,
        //                 Points: n.join("|")
        //             })
        //         });
        //         $(".form-table").find(".convexRoomItem").each(function() {
        //             var u = $(this),
        //                 t = u.find(".shape-container").height() / 12 * 304.8,
        //                 l = u.find("input:eq(0)").val(),
        //                 n = [],
        //                 o = u.find("[data-id=resizable1]"),
        //                 e = u.find("[data-id=resizable2]"),
        //                 r = o.width() * 25.4,
        //                 s = o.height() * 25.4,
        //                 h = e.width() * 25.4,
        //                 c = e.height() * 25.4,
        //                 f = parseInt(e.css("top")) * 25.4;
        //             n.push("0," + (t - s).toFixed(2));
        //             n.push(r.toFixed(2) + "," + (t - s).toFixed(2));
        //             n.push(r.toFixed(2) + "," + (t - c - f).toFixed(2));
        //             n.push((r + h).toFixed(2) + "," + (t - c - f).toFixed(2));
        //             n.push((r + h).toFixed(2) + "," + (t - f).toFixed(2));
        //             n.push(r.toFixed(2) + "," + (t - f).toFixed(2));
        //             n.push(r.toFixed(2) + "," + t.toFixed(2));
        //             n.push("0," + t.toFixed(2));
        //             i.polygonRooms.push({
        //                 RoomName: l,
        //                 Points: n.join("|")
        //             })
        //         });
        //         $(".form-table").find(".concaveRoomItem").each(function() {
        //             var u = $(this),
        //                 t = u.find(".shape-container").height() / 12 * 304.8,
        //                 l = u.find("input:eq(0)").val(),
        //                 n = [],
        //                 o = u.find("[data-id=resizable1]"),
        //                 e = u.find("[data-id=resizable2]"),
        //                 r = o.width() * 25.4,
        //                 s = o.height() * 25.4,
        //                 h = e.width() * 25.4,
        //                 c = e.height() * 25.4,
        //                 f = parseInt(e.css("top")) * 25.4;
        //             n.push("0," + (t - s).toFixed(2));
        //             n.push(r.toFixed(2) + "," + (t - s).toFixed(2));
        //             n.push(r.toFixed(2) + "," + (t - c - f).toFixed(2));
        //             n.push((r - h).toFixed(2) + "," + (t - c - f).toFixed(2));
        //             n.push((r - h).toFixed(2) + "," + (t - f).toFixed(2));
        //             n.push(r.toFixed(2) + "," + (t - f).toFixed(2));
        //             n.push(r.toFixed(2) + "," + t.toFixed(2));
        //             n.push("0," + t.toFixed(2));
        //             i.polygonRooms.push({
        //                 RoomName: l,
        //                 Points: n.join("|")
        //             })
        //         });
        //         $(".form-table").find(".stairItem").each(function() {
        //             var t = $(this),
        //                 o = t.find("input:eq(0)").val(),
        //                 s = t.find("input:eq(3)").val(),
        //                 r, u, f;
        //             if (e) {
        //                 var h = t.find("input:eq(1)").val(),
        //                     c = t.find("select:eq(0)").val(),
        //                     l = t.find("input:eq(4)").val(),
        //                     a = t.find("select:eq(1)").val(),
        //                     v = t.find("input:eq(6)").val(),
        //                     y = t.find("select:eq(2)").val();
        //                 r = n(h, c);
        //                 u = n(l, a);
        //                 f = n(v, y)
        //             } else r = t.find("input:eq(2)").val(), u = t.find("input:eq(5)").val(), f = t.find("input:eq(7)").val();
        //             i.stairs.push({
        //                 StairName: o,
        //                 StairWidth: r,
        //                 StepCount: s,
        //                 TreadWidth: u,
        //                 RiseHeight: f
        //             })
        //         });
        //         c = s(i);
        //         t = {
        //             measureSystem: h,
        //             imageWidth: $("#imageWidthText").val(),
        //             modelScript: c
        //         };
        //         var r = $(this),
        //             l = r.val(),
        //             a = r.data("diagram") == "True";
        //         r.val("Calculating...").attr("disabled", "disabled");
        //         $(".estimate-section").hide();
        //         $.post("/public/calculator", t).done(function(n) {
        //             sessionStorage.setItem("m2estimate", JSON.stringify(n));
        //             a ? ($(".form-table").hide(), r.val(l).removeAttr("disabled"), $(".estimate-section").show(), n.ImageBase64String = "data:image/png;base64," + n.ImageBase64String, $("#imgEstimate").attr("src", n.ImageBase64String).attr("width", $(".estimate-section").width()), $(".breadcrumb li:eq(0)").addClass("disactive"), $(".breadcrumb li:eq(1)").removeClass("disabled").removeClass("disactive")) : ($(".estimate-section").hide(), $("#closeBackBtn").trigger("click"))
        //         }).fail(function() {
        //             r.val(l).removeAttr("disabled");
        //             alert("unknown exception during the calculation")
        //         })
        //     }
        //     // alert(t);
        //     console.log(t);
        // });
        // $("#btnSend").on("click", function() {
        //     var f = $("#emailText").val().trim(),
        //         n, i, r, u, e;
        //     $("#nameText").length > 0 && (n = $("#nameText").val().trim(), i = $("#phoneText").val().trim());
        //     $("#message").html("");
        //     r = !0;
        //     u = f.split(",");
        //     for (e in u) /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(u[e].trim()) || (r = !1);
        //     if (r) {
        //         if ($("#checkEmailThirdParty").prop("checked")) {
        //             if (n == "") {
        //                 $("#nameText").focus();
        //                 return
        //             }
        //             if (i == "") {
        //                 $("#phoneText").focus();
        //                 return
        //             }
        //             t.name = n;
        //             t.phone = i;
        //             t.thirdPartyEmail = $("#thirdPartyEmailText").val();
        //             t.thirdPartyName = $("#thirdPartyNameText").val()
        //         }
        //           t.emails = $("#emailText").val();
        //         a(this, 30);
        //         $.post("/public/calculatorToEmail", t, function(n) {
        //             n.success ? $("#message").html("<span style='color:green;'>Email was sent, please check your email inbox.<\/span>") : $("#message").html("<span style='color:red;'>" + n.errorMessage + "<\/span>")
        //         })
        //     } else $("#emailText").focus(), f != "" && $("#message").html("<span style='color:red;'>Invalid email address<\/span>")

        //     alert(t);
        // });
        // $("#checkEmailThirdParty").on("change", function() {
        //     var n = $(".email-section table");
        //     n.find("tr:eq(2)").toggle();
        //     n.find("tr:eq(3)").toggle()
        // })
    })
})()