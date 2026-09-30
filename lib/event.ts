export const REGISTRATION_DEADLINE = '2026-10-25T23:59:59+05:30'

export type Person = { name: string; role?: string; phone?: string }

export const chiefPatrons: Person[] = [
  { name: 'Dr. Nandini Murthy', role: 'Secretary, MRET' },
  { name: 'Dr. Ramalingaiah', role: 'Treasurer, MRET' },
]

export const patrons: Person[] = [
  { name: 'Dr. Abhinandhan K S', role: 'Principal, MRIT' },
  { name: 'Dr. Nakul N', role: 'Vice Principal, MRIT' },
]

export const convenors: Person[] = [
  { name: 'Dr. L. Lakshmi Durga', role: 'HOD, Dept of CSE' },
  { name: 'Ms. Soumya B J', role: 'HOD, Dept of ISE' },
  { name: 'Dr. Bharathesh Patel N', role: 'HOD, Dept of AI&ML' },
  { name: 'Dr. Divya S', role: 'HOD, Dept of AI&DS' },
]

export const facultyCoordinators: Person[] = [
  { name: 'Dr. Divya S', phone: '+91 7259151555' },
  { name: 'Ms. Dhanya K N', phone: '+91 9591023488' },
  { name: 'Mr. Kiran B', phone: '+91 8095620284' },
]

export const studentCoordinators: Person[] = [
  { name: 'Poornima S' },
  { name: 'Nandini' },
  { name: 'Dhushyanth Gowda' },
  { name: 'Bharath P' },
]
