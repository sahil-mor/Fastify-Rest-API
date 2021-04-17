const Course = require("../models/Courses")


// get all courses
exports.getCourse = async (req,reply) => {
    try {
        const courses = await Course.find({})
        return courses
    } catch (error) {
        throw error
    }
}

// get a single course
exports.getSingleCourse = async (req,reply) => {
    try {
        const { id } = req.params
        const course = Course.findById(id)
        return course
    } catch (error) {
        throw error
    }
}

// add a new course
exports.addCourse = async (req,reply) => {
    try {
        var {name,price,subtitle,releaseYear} = req.body
        const newCourse = new Course({name,price,subtitle,releaseYear})
        return newCourse.save()
    } catch (error) {
        throw error
    }
}

// update course
exports.updateCourse = async (req,reply) => {
    try {
        const { id } = req.params
        var {name,price,subtitle,releaseYear} = req.body
        const {...updated} = {name,price,subtitle,releaseYear} 
        const updatedCourse = await Course.findByIdAndUpdate(id,updated)
        return updatedCourse
    } catch (error) {
        throw error
    }
}

// delete an existing course
exports.deleteCourse = async (req,reply) => {
    try {
        const { id } = req.params
        const deletedCourse = await Course.findByIdAndDelete(id)
        return deletedCourse
    } catch (error) {
        throw error
    }
}