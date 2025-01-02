const express = require('express');

const {
  createGoal,
  editGoal,
  getGoals,
} = require('../controllers/goal-controller');

const router = express.Router();

router.post('/create-goal', createGoal);
router.get('/get-goals', getGoals);
router.put('/edit-goal/:id', editGoal);

module.exports = router;
