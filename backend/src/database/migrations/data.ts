import { COURTS, ILawsuit, IMovements } from '../../models/Lawsuits';
const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return `${day}/${month}/${year}`;
};
export const lawsuits: ILawsuit[] = [
  {
    id: '101',
    cns: '5001682-88.2010.8.13.0672',
    concerned_parties: 'Fulano 1, Fulano 2',
    original_court: COURTS.TJBA,
    start_date: formatDate(new Date('07/10/2010')),
  },
  {
    id: '102',
    cns: '5993562-88.2020.8.13.3072',
    concerned_parties: 'Ciclano 1, Ciclano 2',
    original_court: COURTS.TJPR,
    start_date: formatDate(new Date('10/21/2020')),
  },
  {
    id: '103',
    cns: '8523674-99.2002.8.13.3072',
    concerned_parties: 'Ciclano 3, Ciclano 2',
    original_court: COURTS.TJAC,
    start_date: formatDate(new Date('07/22/2020')),
  },
  {
    id: '104',
    cns: '2478516-99.2007.8.13.3072',
    concerned_parties: 'Beltrana 1, Beltrano 2',
    original_court: COURTS.TJAM,
    start_date: formatDate(new Date('11/05/2020')),
  },
];

export const movements: IMovements[] = [
  {
    id: '201',
    date: formatDate(new Date('10/23/2020')),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu sem et urna porta congue. Maecenas non felis ut mauris interdum rhoncus. Quisque scelerisque, urna ornare auctor pretium, turpis massa aliquet quam, non congue ex augue ac augue. Vivamus vitae varius est, non accumsan ante. Mauris vitae efficitur velit. Suspendisse pellentesque laoreet diam vel vulputate. In ultricies tempor euismod. Integer at fermentum nunc. Sed rhoncus dui a libero ornare mattis. Pellentesque venenatis tempus fringilla.',
    lawsuit_id: '102',
  },
  {
    id: '202',
    date: formatDate(new Date('10/25/2020')),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu sem et urna porta congue. Maecenas non felis ut mauris interdum rhoncus. Quisque scelerisque, urna ornare auctor pretium, turpis massa aliquet quam, non congue ex augue ac augue. Vivamus vitae varius est, non accumsan ante. Mauris vitae efficitur velit. Suspendisse pellentesque laoreet diam vel vulputate. In ultricies tempor euismod. Integer at fermentum nunc. Sed rhoncus dui a libero ornare mattis. Pellentesque venenatis tempus fringilla.',
    lawsuit_id: '102',
  },
  {
    id: '203',
    date: formatDate(new Date('10/23/2020')),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu sem et urna porta congue. Maecenas non felis ut mauris interdum rhoncus. Quisque scelerisque, urna ornare auctor pretium, turpis massa aliquet quam, non congue ex augue ac augue. Vivamus vitae varius est, non accumsan ante. Mauris vitae efficitur velit. Suspendisse pellentesque laoreet diam vel vulputate. In ultricies tempor euismod. Integer at fermentum nunc. Sed rhoncus dui a libero ornare mattis. Pellentesque venenatis tempus fringilla.',
    lawsuit_id: '101',
  },
  {
    id: '204',
    date: formatDate(new Date('10/23/2020')),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu sem et urna porta congue. Maecenas non felis ut mauris interdum rhoncus. Quisque scelerisque, urna ornare auctor pretium, turpis massa aliquet quam, non congue ex augue ac augue. Vivamus vitae varius est, non accumsan ante. Mauris vitae efficitur velit. Suspendisse pellentesque laoreet diam vel vulputate. In ultricies tempor euismod. Integer at fermentum nunc. Sed rhoncus dui a libero ornare mattis. Pellentesque venenatis tempus fringilla.',
    lawsuit_id: '103',
  },
  {
    id: '205',
    date: formatDate(new Date('09/10/2020')),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu sem et urna porta congue. Maecenas non felis ut mauris interdum rhoncus. Quisque scelerisque, urna ornare auctor pretium, turpis massa aliquet quam, non congue ex augue ac augue. Vivamus vitae varius est, non accumsan ante. Mauris vitae efficitur velit. Suspendisse pellentesque laoreet diam vel vulputate. In ultricies tempor euismod. Integer at fermentum nunc. Sed rhoncus dui a libero ornare mattis. Pellentesque venenatis tempus fringilla.',
    lawsuit_id: '104',
  },
];
