import { ServiceDTO } from 'src/DTO';
import { Service } from 'src/entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('service')
export class ORMService {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 64, nullable: false, unique: true })
  customer_id!: string;

  @Column({ type: 'varchar', length: 64, nullable: false })
  name!: string;

  @Column({ type: 'varchar', length: 64, nullable: false })
  price!: string;

  @Column({ type: 'varchar', length: 64, nullable: false })
  description!: string;


  static import(instance: Service): ORMService {
    const entity = new ORMService();

    entity.customer_id = instance.customer_id;
    entity.name = instance.name;
    entity.price = instance.price;
    entity.description = instance.description;

    return entity;
  }

  export(): Service {
    const retrivedData: ServiceDTO = {
      id: this.id,
      customer_id: this.customer_id,
      name: this.name,
      price: this.price,
      description: this.description,
    };

    // const buildService = Service.build(retrivedData);
    // if(buildService.isFailure) {
    //   throw buildService.error;
    // }
    return new Service(retrivedData);
  }
}