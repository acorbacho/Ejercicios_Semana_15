/**
 * Función principal.
 */
function main() {
    //Saludo.
    salida('Bienvenido al juego.')

    //Variables.
    var nombreHeroe = entrada('Introduce el nombre de tu héroe.')
    var heroe = new Heroe(nombreHeroe, 100, 2500, 1, 0, 10, false)
    var experiencia_ganada
    var enemigo
    var continuar
    var boton_atacar = document.getElementById('atacar');
    var boton_defenderse = document.getElementById('defenderse');

    //jQuery CSS.
    $('.contenedor').css({ 'display': 'flex', 'flex-direction': 'row', 'flex-wrap': 'wrap', 'justify-content': 'space-evenly' })
    $('.heroe #nivel, .heroe #salud, .heroe #experiencia, .heroe h3').css({ 'font-size': '20px', 'color': 'blue', 'text-align': 'center' })
    $('.enemigo #nivel, .enemigo #salud, .enemigo h3').css({ 'font-size': '16px', 'color': 'red', })
    $('.enemigo').css({ 'border': '4px solid black' })

    //Stats heroe.
    function stats_heroe() {
        $('.heroe #nivel').html(heroe.getNivel)
        $('.heroe #experiencia').html(heroe.getExperiencia)
        $('.heroe #salud').html(heroe.getVida + '/' + heroe.getVida)
        $('.heroe #defensa').html(heroe.getDefensa)
        $('.heroe #ataque').html(heroe.getAtaque)
        document.getElementById('nombre_heroe').innerHTML = heroe.getNombre
    }
    stats_heroe()

    //Spawn del enemigo.
    enemigo = spawn_enemigos()

    //Stats enemigo.
    function stats_enemigo() {
        $('.enemigo #nivel').html(enemigo.getNivel)
        $('.enemigo #salud').html(enemigo.getVida + '/' + enemigo.getVida)
        $('.enemigo #defensa').html(enemigo.getDefensa)
        $('.enemigo #ataque').html(enemigo.getAtaque)
        document.getElementById('nombre_enemigo').innerHTML = enemigo.getNombre
        document.getElementsByTagName('img')[0].src = enemigo.getImg
    }
    stats_enemigo()

    //Event listener.
    boton_atacar.addEventListener('click', atacar)
    boton_defenderse.addEventListener('click', defender)

    //Función que ejecuta el proceso de ataque del heroe.
    function atacar() {
        var isDead
        heroe.setIsDefendiendo = false
        $('.textdisplay').html('¡¡¡' + heroe.getNombre + '(' + heroe.getNivel + ')' + ' ataca a ' + enemigo.getNombre + '(' + enemigo.getNivel + ')!!!')
        enemigo.setVida = enemigo.receiveDmg(heroe.getAtaque)
        $('.enemigo #salud').html(enemigo.getVida + '/' + enemigo.getVida)
        $('.heroe #experiencia').html(heroe.getExperiencia)

        //Comprobamos muerte del enemigo.
        isDead = comprobar_muerte()

        if (!isDead) {
            setTimeout(recibir, 200)
        }
    }

    //Función que ejecuta el proceso de defensa del heroe.
    function defender() {
        var isDead
        $('.textdisplay').html('¡¡¡' + heroe.getNombre + '(' + heroe.getNivel + ')' + ' se defiende!!!')
        heroe.setIsDefendiendo = true

        /*Comprobamos muerte del enemigo. No es estrictamente necesario por el momento,
        pero puede ser útil en futuras expansiones.*/
        isDead = comprobar_muerte()

        if (!isDead) {
            setTimeout(recibir, 1000)
        }
    }

    //Función que ejecuta el contraataque del enemigo.
    function recibir() {
        $('.textdisplay').html('¡¡¡' + enemigo.getNombre + '(' + enemigo.getNivel + ')' + ' ataca a ' + heroe.getNombre + '(' + heroe.getNivel + ')!!!')
        heroe.setVida = heroe.receiveDmg(enemigo.getAtaque)
        $('.heroe #salud').html(heroe.getVida + '/' + heroe.getVida)
        setTimeout(comprobar_muerte, 500)
    }

    //Función de comprobación de muertes (x.x).
    function comprobar_muerte() {

        if (!heroe.stillAlive()) {
            $('.textdisplay').html('Ha ganado ' + enemigo.getNombre + '. ' + heroe.getNombre + ' ha muerto.\nGAME OVER.')
            $(".heroe").fadeOut(200)
            setTimeout(stats_enemigo, 500)
            continuar = entrada('¿Deseas empezar una nueva partida?')

            if (continuar == 'si') {
                nombreHeroe = entrada('Introduce el nombre de tu heroe.')
                heroe = new Heroe(nombreHeroe, 100, 25, 1, 0, 10, false)
                stats_heroe()
                enemigo = spawn_enemigos()
                $(".heroe").fadeIn(200)
                setTimeout(stats_enemigo, 100)
                $(".enemigo").fadeIn(200)
            } else {
                salida('Hasta luego.')
            }
            return true
        }

        if (!enemigo.stillAlive()) {
            $('.textdisplay').html('Ha ganado ' + heroe.getNombre + '.')
            experiencia_ganada = enemigo.expDrop(heroe.getNivel)
            heroe.levelUp(experiencia_ganada)
            $(".enemigo").fadeOut(200)
            enemigo = spawn_enemigos()
            setTimeout(stats_enemigo, 500)
            $(".enemigo").fadeIn(800)
            $('.textdisplay').html(enemigo.getNombre + ' ha aparecido.')
            return true
        }
    }
}
main()