import { Controller, Get,Param, Post,Body,Put,Delete } from '@nestjs/common';


interface CreatePropertyDto {
    name:string;
    location:string;
    price:number;
}
interface UpdatePropertyDto {
    name?: string;
    location?: string;
    price?; string;
}

@Controller('properties')
export class PropertiesController {
    
}
