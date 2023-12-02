import { Escolaridade } from './escolaridade';

describe('Escolaridade', () => {
  it('should have valid enum values', () => {
    expect(Escolaridade.ENFUNDAMENTALINCOMPLETO).toEqual('ENFUNDAMENTALINCOMPLETO');
    expect(Escolaridade.ENFUNDAMENTALCOMPLETO).toEqual('ENFUNDAMENTALCOMPLETO');
    expect(Escolaridade.ENMEDIOINCOMPLETO).toEqual('ENMEDIOINCOMPLETO');
    expect(Escolaridade.ENMEDIOCOMPLETO).toEqual('ENMEDIOCOMPLETO');
    expect(Escolaridade.CURSANDO).toEqual('CURSANDO');
    expect(Escolaridade.ENSUPERIORCOMP).toEqual('ENSUPERIORCOMP');
    expect(Escolaridade.NULL).toEqual('NULL');
  });
});
