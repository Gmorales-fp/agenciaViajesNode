import express from 'express'; //imortante debe nunca faltar
import { paginaInicio, 
        paginaNosotros, 
        paginaViajes, 
        paginaTestimoniales,
        paginaDetalleViaje } from '../controllers/paginasController.js';

import {guardarTestimoniales} from '../controllers/tetstimonialController.js';

const router = express.Router(); //imortante debe nunca faltar

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimoniales);


export default router; //imortante debe nunca faltar