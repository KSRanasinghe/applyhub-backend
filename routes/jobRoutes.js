import express from 'express';
import Job from '../models/Job.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { company, position, status } = req.body;

    const job = await Job.create({
      company,
      position,
      status,
    });

    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;