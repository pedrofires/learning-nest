import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
   @Get()
   findAll() {
      return 'Returns all courses'
   }

   @Get(':id')
   findOne(@Param('id') id: string) {
      return `Returning ${id}`
   }

   @Post()
   create(@Body() body) {
      return body;
   }

   @Patch(':id')
   update(@Param('id') id: string, @Body() body) {
      console.log(body);
      return `Updated ${id}`;
   }

   @HttpCode(HttpStatus.NO_CONTENT)
   @Delete(':id')
   remove(@Param('id') id: string) {
      return `Deleted ${id}`;
   }
}
