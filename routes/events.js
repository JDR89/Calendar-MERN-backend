const { Router } = require("express")
const { validarJWT } = require("../middlewares/validar-jwt")
const { getEvento, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events")
const { check } = require("express-validator")
const { validarCampos } = require("../middlewares/validar-campos")
const { isDate } = require("../helpers/isDate")



const router = Router()

//todas tienen que pasar por la validacion 
router.use(validarJWT)

//obtener eventos
router.get("/", getEvento)

//Crear un nuevo evento
router.post("/",[
    check("title","El titulo es obligatorio").not().isEmpty(),
    check("start","Fecha de inicio es obligatorio").custom(isDate),
    check("end","Fecha de finalizacion es obligatorio").custom(isDate),
    validarCampos
], crearEvento)

//Actualizar evento
router.put(
    '/:id',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
        validarCampos
    ],
    actualizarEvento);

//Eliminar evento
router.delete("/:id", eliminarEvento)

module.exports = router
