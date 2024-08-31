import { Injectable, NotFoundException } from '@nestjs/common';
import { Course } from './courses.entity';

@Injectable()
export class CoursesService {
   private courses: Course[] = [
      {
         id: 1,
         name: "Curso NestJS Inciante",
         description: "Curso sobre fundamentos do nestJs",
         tags: ['nestjs', 'nodejs', 'typescript', 'javascript', 'backend']
      }
   ];

   findAll() {
      return this.courses;
   }

   findOne(id: number): Course {
      const course = this.courses.find(course => course.id === id);
      if (!course) {
         throw new NotFoundException(`Course ID not found`);
      }
      return course;
   }

   create(createCourseDTO: any) {
      this.courses.push(createCourseDTO);
   }

   update(id: number, updateCourseDTO: any) {
      const courseFounded = this.findOne(id);
      if (courseFounded) {
         const index = this.courses.findIndex(course => course.id === id);
         this.courses[index] = {
            id,
            ...updateCourseDTO
         }
      }
   }

   remove(id: number) {
      const index = this.courses.findIndex(course => course.id === id);
      if (index >= 0) {
         this.courses.splice(index, 1);
      }
   }
}
