import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  async create(createBookDto: CreateBookDto) {
    try {
      return await this.prisma.book.create({
        data: createBookDto,
      });
    } catch (error) {
      console.error('Error creating book with data:', createBookDto);
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // Handle specific Prisma errors (e.g., unique constraint violation)
        if (error.code === 'P2002') {
          throw new HttpException('Duplicate book title', HttpStatus.CONFLICT);
        }
      }
      // Handle other errors
      console.error('Error creating book:', error);
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      const books = await this.prisma.book.findMany();
      console.log('Retrieved books:', books);
      return books;
    } catch (error) {
      console.error('Error fetching books:', error);
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
