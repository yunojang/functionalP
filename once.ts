const getSpm = (spm_a: any, spm_b: any) => {
  return [spm_a, spm_b];
};

// partial function -> flexable default value
const getSpmb = (spm_b: any) => {
  //
  return getSpm(1000, spm_b);
};
