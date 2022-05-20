const descValidation = (req, res, next) => {
    try {
        const { description } = req.body;
  
        if (!description || description === '') {
            return res.status(400).json({ message: '"description" is required' });
        }
  
        if (description.length < 8) {
            return res.status(400).json(
                { message: '"description" length must be at least 8 characters long' },
            );
        }
  
        return next();
    } catch (error) {
        return next(error);
    }
  };
  
  module.exports = descValidation;