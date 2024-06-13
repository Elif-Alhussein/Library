import { Injectable } from '@nestjs/common';
import { Book } from './entities/book.entity';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}
  private books: Book[] = [];

  // create(createBookDto: CreateBookDto): Book {
  //   const book = new Book();
  //   book.title = createBookDto.title;
  //   book.bookType = createBookDto.bookType;
  //   book.author = createBookDto.author;
  //   book.releaseDate = createBookDto.releaseDate;
  //   return this.prisma.book.create({
  //     data: book,
  //   });
  // }
  async createBook(
    data: Prisma.BookCreateInput,
  ): Promise<Prisma.BookCreateInput> {
    console.info('data => ', data);
    return this.prisma.book.create({
      data,
    });
  }
  findAll() {
    return this.prisma.book.findMany();
  }

  // async create(createBookDto: CreateBookDto) {
  //   try {
  //     return await this.prisma.book.create({
  //       data: createBookDto,
  //     });
  //   } catch (error) {
  //     console.error('Error creating book with data:', createBookDto);
  //     if (error instanceof Prisma.PrismaClientKnownRequestError) {
  //       // Handle specific Prisma errors (e.g., unique constraint violation)
  //       if (error.code === 'P2002') {
  //         throw new HttpException('Duplicate book title', HttpStatus.CONFLICT);
  //       }
  //     }
  //     // Handle other errors
  //     console.error('Error creating book:', error);
  //     throw new HttpException(
  //       'Internal server error',
  //       HttpStatus.INTERNAL_SERVER_ERROR,
  //     );
  //   }
  // }

  // async findAll() {
  //   try {
  //     const books = await this.prisma.book.findMany();
  //     console.log('Retrieved books:', books);
  //     return books;
  //   } catch (error) {
  //     console.error('Error fetching books:', error);
  //     throw new HttpException(
  //       'Internal server error',
  //       HttpStatus.INTERNAL_SERVER_ERROR,
  //     );
  //   }
  // }
}
