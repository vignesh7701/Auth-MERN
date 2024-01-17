import express from "express"

const router = express.Router();

router.get('/', (req, res) => { 
    res.json({ message: "Hello from Server", });
})

export default router;