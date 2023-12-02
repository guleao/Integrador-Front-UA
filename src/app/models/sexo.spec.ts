import { Sexo } from './sexo';

describe('Sexo', () => {
  it('should have valid enum values', () => {
    expect(Sexo.MASCULINO).toEqual('MASCULINO');
    expect(Sexo.FEMININO).toEqual('FEMININO');
    expect(Sexo.OUTRO).toEqual('OUTRO');
    expect(Sexo.NULL).toEqual('NULL');
  });
});
