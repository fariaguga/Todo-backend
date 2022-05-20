const nameValidation = (req, res, next) => {
    try {
        const { name } = req.body;
  
        if (!name || name === '') {
            return res.status(400).json({ message: '"name" is required' });
        }
  
        if (name.length < 4) {
            return res.status(400).json(
                { message: '"name" length must be at least 4 characters long' },
            );
        }
  
        return next();
    } catch (error) {
        return next(error);
    }
  };
  
  module.exports = nameValidation;