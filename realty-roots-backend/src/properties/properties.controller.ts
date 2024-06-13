import { Controller, Get,Param, Post,Body,Put,Delete } from '@nestjs/common';
import { PropertiesService, Property } from './properties.service';


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
    constructor(private readonly propertiesService: PropertiesService){}

    @Get()
    getAllProperties(){    this.propertiesService.getAllProperties()
    }
    @Get(':id')
    getPropertyById(@Param('id') id:number){
        return this.propertiesService.getPropertyById(Number(id))
    }

    @Post()
    createProperty(@Body() createPropertyDto: CreatePropertyDto){
        return this.propertiesService.createProperty(createPropertyDto)
    }
    @Put(':id')
    updateProperty(@Param('id') id:number, @Body() updatePropertyDro: UpdatePropertyDto ){
        return this.propertiesService.updateProperty(Number(id),updatePropertyDro)
    }
    @Delete(":id")
    deleteProperty(@Param() id:number){
        this.propertiesService.deleteProperty(Number(id))
        return {message: 'Property deleted Succesfully'}
    }

}
