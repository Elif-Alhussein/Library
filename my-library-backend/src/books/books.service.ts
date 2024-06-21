import { Injectable } from '@nestjs/common';
import { Book } from './entities/book.entity';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

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

  //  UPDATE BOOK
  async updateBook(id: string, data: Prisma.BookUpdateInput): Promise<Book> {
    const updatedBook = await this.prisma.book.update({
      where: { id },
      data,
    });
    return {
      id: updatedBook.id,
      title: updatedBook.title,
      author: updatedBook.author,
      bookType: updatedBook.bookType,
      releaseDate: updatedBook.releaseDate,
    };
  }

  // DELETE BOOK
  async deleteBook(id: string): Promise<Book> {
    const deletedBook = await this.prisma.book.delete({
      where: { id },
    });
    return {
      id: deletedBook.id,
      title: deletedBook.title,
      author: deletedBook.author,
      bookType: deletedBook.bookType,
      releaseDate: deletedBook.releaseDate,
    };
  }
}
