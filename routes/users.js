import express from 'express';
const router = express.Router();

router.get('/', () => {
    console.log('get request');
})

export default router;