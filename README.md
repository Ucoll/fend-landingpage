# TODO LIST:

- Eliminar todos los valores **hardcodeados de "User"** cuando el registro y el login estén operativos (Marcados con comentarios **TODO**). Hacer esto al final del todo, cuando todos los Endpoints estén en funcionamiento para no ralentizar el testoe de los mismos. 

- Arreglar **barra de búsqueda**: sigue haciendo la *retracción* rara cuando termina de ampliarse. Además, mientras esté activa (el usuario tenga el input seleccionado) debe *mantenerse abierta* aunque el cursor salga del componente

- La primera Universidad, Facultad y Clase que deben crearse (para que tengan la Id "hardcodeada" 1) es GLOBAL (Un placeholder para los mensajes globales). En esta primera versión, las facultades no tendrán mensajes específicos, sólamente devolverá el feed todos los mensajes de todas las clases asociadas con tu facultad/universidad