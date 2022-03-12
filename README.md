# TODO LIST:

- Eliminar todos los valores **hardcodeados de "User"** cuando el registro y el login estén operativos (Marcados con comentarios **TODO**)

- Arreglar **barra de búsqueda**: sigue haciendo la *retracción* rara cuando termina de ampliarse. Además, mientras esté activa (el usuario tenga el input seleccionado) debe *mantenerse abierta* aunque el cursor salga del componente

- La primera Universidad, Facultad y Clase que deben crearse (para que tengan la Id "hardcodeada" 1) es GLOBAL (Un placeholder para los mensajes globales). En esta primera versión, las facultades no tendrán mensajes específicos, sólamente devolverá el feed todos los mensajes de todas las clases asociadas con tu facultad/universidad

# CHANGELIST

- Eliminado el Drag & Drop. A falta de más tiempo para averiguar como pasar los archivos entre el componente hijo y el padre utilizando una librería que permita el Drag & Drop, se opta por un input que te permita subir archivos navegando entre las carpetas.