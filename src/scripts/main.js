AOS.init();

const dataDoEvento = new Date("Mar 14, 2025 19:00:00");
const timesTempDoEvento = dataDoEvento.getTime();

const meuIntervlo = setInterval(function(){ 
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaEvento = timesTempDoEvento - timeStampAtual;

    const diaEmMS = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;


    const diasAteOEvento =  Math.floor(distanciaEvento / diaEmMS);
    const horasAteOEvento = Math.floor((distanciaEvento % diaEmMS) / horasEmMs);
    const minutosAteOEvento = Math.floor((distanciaEvento % horasEmMs) / minutosEmMs);
    const segundosAteOEvento = Math.floor((distanciaEvento % minutosEmMs) / 1000);
    console.log(diasAteOEvento)
    console.log(horasAteOEvento)
    console.log(minutosAteOEvento)
    console.log(segundosAteOEvento)

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if( distanciaEvento < 0){
        clearInterval(meuIntervlo);
        document.getElementById('contador').innerHTML = 'Evento encerrado';
    }
}, 1000)