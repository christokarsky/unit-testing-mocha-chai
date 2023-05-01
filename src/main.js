function partitionStudentsByScore(students = [], score){
    const lowScores = students.filter((student)=>{
      return student.score <= score
    })
    
      const highScores = students.filter((student)=>{
      return student.score > score
    })
      
      return [lowScores, highScores]
  }
  
  module.exports = partitionStudentsByScore