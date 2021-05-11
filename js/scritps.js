function branding() {
    let mostrar2 = document.getElementById("mostrar2");
    mostrar2.addEventListener("click", function leadJSON(json) {
        let datos =
            '{"branding":[' +
            '{"img": "img/branding/img001.jpg"},' +
            '{"img": "img/branding/img002.jpg"},' +
            '{"img": "img/branding/img003.jpg"},' +
            '{"img": "img/branding/img004.jpg"},' +
            '{"img": "img/branding/img005.jpg"},' +
            '{"img": "img/branding/img006.jpg"},' +
            '{"img": "img/branding/img007.jpg"},' +
            '{"img": "img/branding/img008.jpg"},' +
            '{"img": "img/branding/img009.jpg"},' +
            '{"img": "img/branding/img010.jpg"}' +
            "]}";

        var json = JSON.parse(datos);
        var out = "";
        var i;
        for (i = 0; i < json.branding.length; i++) {
            out += "<div> <section> <article>  <figure><img src=" + json.branding[i].img + "> </figure></article> </section>";
        }
        document.getElementById("alumno").innerHTML = out;
    });
}
function Web() {
    let mostrar3 = document.getElementById("mostrar3");
    mostrar3.addEventListener("click", function leadJSON(json) {
        let datos =
            '{"Web":[' +
            '{"img": "img/Web/img001.jpg"},' +
            '{"img": "img/Web/img002.jpg"},' +
            '{"img": "img/Web/img003.jpg"},' +
            '{"img": "img/Web/img004.jpg"},' +
            '{"img": "img/Web/img005.jpg"},' +
            '{"img": "img/Web/img006.jpg"},' +
            '{"img": "img/Web/img007.jpg"},' +
            '{"img": "img/Web/img008.jpg"},' +
            '{"img": "img/Web/img009.jpg"},' +
            '{"img": "img/Web/img010.jpg"}' +
            "]}";

        var json = JSON.parse(datos);
        var out2 = "";
        var i;
        for (i = 0; i < json.Web.length; i++) {
            out2 += "<div> <section> <article>  <figure><img src=" + json.Web[i].img + "> </figure></article> </section>";
        }
        document.getElementById("alumno").innerHTML = out2;
    });
}
function Photo() {
    let mostrar4 = document.getElementById("mostrar4");
    mostrar4.addEventListener("click", function leadJSON(json) {
        let datos =
            '{"Photo":[' +
            '{"img": "img/Photo/img001.jpg"},' +
            '{"img": "img/Photo/img002.jpg"},' +
            '{"img": "img/Photo/img003.jpg"},' +
            '{"img": "img/Photo/img004.jpg"},' +
            '{"img": "img/Photo/img005.jpg"},' +
            '{"img": "img/Photo/img006.jpg"},' +
            '{"img": "img/Photo/img007.jpg"},' +
            '{"img": "img/Photo/img008.jpg"},' +
            '{"img": "img/Photo/img009.jpg"},' +
            '{"img": "img/Photo/img010.jpg"}' +
            "]}";

        var json = JSON.parse(datos);
        var out3 = "";
        var i;
        for (i = 0; i < json.Photo.length; i++) {
            out3 += "<div> <section> <article>  <figure><img src=" + json.Photo[i].img + "> </figure></article> </section>";
        }
        document.getElementById("alumno").innerHTML = out3;
    });
}
function App() {
    let mostrar5 = document.getElementById("mostrar5");
    mostrar5.addEventListener("click", function leadJSON(json) {
        let datos =
            '{"App":[' +
            '{"img": "img/App/img001.jpg"},' +
            '{"img": "img/App/img002.jpg"},' +
            '{"img": "img/App/img003.jpg"},' +
            '{"img": "img/App/img004.jpg"},' +
            '{"img": "img/App/img005.jpg"},' +
            '{"img": "img/App/img006.jpg"},' +
            '{"img": "img/App/img007.jpg"},' +
            '{"img": "img/App/img008.jpg"},' +
            '{"img": "img/App/img009.jpg"},' +
            '{"img": "img/App/img010.jpg"}' +
            "]}";

        var json = JSON.parse(datos);
        var out4 = "";
        var i;
        for (i = 0; i < json.App.length; i++) {
            out4 += "<div> <section> <article>  <figure><img src=" + json.App[i].img + "> </figure></article> </section>";
        }
        document.getElementById("alumno").innerHTML = out4;
    });
}
