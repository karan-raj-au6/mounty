import User from '../models/User.js'
import catchAsync from '../utils/catchAsync.js'
import { getOne, getAll, updateOne, deleteOne } from './factoryHandler.js'

//signup controller
export const signup = (req, res) => {
    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                error1: err,
                error: 'Try again!'
            });
        }
        res.json({
            user
        });
    });
};


export const updateMe = catchAsync(async (req, res, next) => {

    const user = await User.findByIdAndUpdate(req.user.id, req.body, {
        new: true,
        runValidators: true
    }, (err, docs) => { if (err) { console.log(err) } })

    if (!user) {
        return next(new AppError('Something went wrong!', 500))
    }
    res.status(200).json({
        status: 'success',
        message: 'successfully updated data!'
    })
})

export const deleteMe = catchAsync(async (req, res, next) => {
    const user = await User.findByIdAndUpdate(req.user.id, { active: false });
    if (!user) {
        return next(new AppError('Invalid Id!', 400))
    }
    res.status(204).json({
        status: 'success',
        data: null
    })
})

export const getUser = getOne(User);
export const getAllUsers = getAll(User);
export const updateUser = updateOne(User);
export const deleteUser = deleteOne(User);
