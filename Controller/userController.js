import User from '../Models/User.js';

// GET all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

// GET user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(user);
  } catch {
    res.status(400).json({ error: 'Invalid ID format' });
  }
};

// POST create new user
export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT update user
export const updateUser = async (req, res) => {
  try {
        // Not using findbyIdandUpdate beacuse it don't trigger schema enforcement
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({ error: 'User not found' })

        //Check for unknown fields
        const allowedFields = ['firstName', 'lastName', 'age', 'email', 'hobbies']; //For validation
        const invalidFields = Object.keys(req.body).filter(key => !allowedFields.includes(key));
        
        // Error message with invalid fields
        if (invalidFields.length > 0) {
            return res.status(400).json({
                error: `Invalid field(s): ${invalidFields.join(', ')}`
            });
        }

        // only update allowed fields
        allowedFields.forEach(field => {
            if(req.body[field] !== undefined){
                user[field] = req.body[field]
            }
        })

        await user.validate() // will throw if invalid types or format
        await user.save() // save updated doc   

        res.status(200).json(user)

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE user
export const deleteUser = async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(deleted);
  } catch {
    res.status(400).json({ error: 'Invalid ID format' });
  }
};
