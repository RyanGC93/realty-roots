import { Injectable, NotFoundException } from '@nestjs/common';
import { PROPERTY_DEPS_METADATA } from '@nestjs/common/constants';

export interface Property {
    id: number;
    name: string;
    location: string;
    price: number;
}

@Injectable()
export class PropertiesService {
    private properties: Property[] = []
    private idCounter = 1; // Maybe generate unique identifier

    getAllProperties(): Property[] {
        return this.properties
    }
    getPropertyById(id: number): Property {
        const property = this.properties.find(prop => prop => prop.id === id)
        if (!property) throw new NotFoundException('Property Not found')
        return property
    }
    createProperty(property: Omit<Property, 'id'>): Property {
        const newProperty = { ...property, id: this.idCounter++ }
        this.properties.push(newProperty)
        return newProperty
    }
    updateProperty(id: number, updateData: Partial<Property>): Property {
        const property = this.getPropertyById(id)
        const updatedProperty = { ...property, ...updateData }
        this.properties = this.properties.map(prop => prop.id === id ? updatedProperty : prop)
        return updatedProperty

    }
    deleteProperty(id: number): void {
        this.getPropertyById(id)
        this.properties = this.properties.filter(prop => prop.id !== id)
    }
}
