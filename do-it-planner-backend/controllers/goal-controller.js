const User = require('../schemas/user'); // Модель користувача

const createGoal = async (req, res) => {
  const { email, goalData } = req.body;
  console.log(email, goalData);

  try {
    // Знайти користувача за email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' }); // Повертаємо помилку і завершуємо виконання
    }

    // Додати нову ціль до масиву goals
    if (!user.goals) {
      user.goals = []; // Ініціалізуємо масив, якщо його немає
    }

    user.goals.push(goalData);
    await user.save(); // Зберігаємо оновленого користувача

    res.status(201).json({ message: 'Goal added to user', user });
    console.log('Goal added to user');
  } catch (error) {
    console.error('Error adding goal:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

const editGoal = async (req, res) => {
  //const goal = await Goal.findById(req.params.id);
  //if (goal) {
  //  goal.name = req.body.name;
  //  goal.progressbar = req.body.progressbar;
  //  await goal.save();
  //  res.status(200).json(goal);
  //} else {
  //  res.status(404).json({ message: 'Goal not found' });
  //}
};

const getGoals = async (req, res) => {
  const { email } = req.query; // Отримання email з query параметрів

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }
  const user = await User.findOne({ email }); // Пошук користувача за email
  if (user) {
    res.status(200).json(user.goals);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

module.exports = { createGoal, editGoal, getGoals };
