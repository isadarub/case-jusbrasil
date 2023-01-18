import { COURTS, ILawsuit, IMovements } from '../../models/Lawsuits';

export const lawsuits: ILawsuit[] = [
  {
    id: '101',
    cns: '5001682-88.2010.8.13.0672',
    concerned_parties: 'insira pessoas aqui',
    original_court: COURTS.TJBA,
    start_date: new Date('07/10/2010'),
  },
  {
    id: '102',
    cns: '5001682-88.2020.8.13.0672',
    concerned_parties: 'pessoas aqui',
    original_court: COURTS.TJPR,
    start_date: new Date('10/22/2020'),
  },
];

export const movements: IMovements[] = [
  {
    id: '201',
    date: new Date('10/23/2020'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu sem et urna porta congue. Maecenas non felis ut mauris interdum rhoncus. Quisque scelerisque, urna ornare auctor pretium, turpis massa aliquet quam, non congue ex augue ac augue. Vivamus vitae varius est, non accumsan ante. Mauris vitae efficitur velit. Suspendisse pellentesque laoreet diam vel vulputate. In ultricies tempor euismod. Integer at fermentum nunc. Sed rhoncus dui a libero ornare mattis. Pellentesque venenatis tempus fringilla.',
    lawsuit_id: '102',
  },
];
