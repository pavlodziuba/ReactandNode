const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')
const deviceInfoRouter = require('./deviceInfoRouter')
const basketDevicesRouter = require('./basketDevicesRouter')
const basketSeenDevicesRouter = require('./basketSeenDevicesRouter')
const ratingRouter = require('./ratingRouter') 
const compareRouter = require('./compareRouter') 

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)
router.use('/deviceinfo', deviceInfoRouter)
router.use('/basketdevices', basketDevicesRouter)
router.use('/basketseendevices', basketSeenDevicesRouter)
router.use('/rating', ratingRouter)
router.use('/compare', compareRouter)

module.exports = router