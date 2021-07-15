import { useStaticQuery, graphql } from 'gatsby';

export const useFetal = () => {
  const { allFetalCsv } = useStaticQuery(
    graphql`
      query AllFetalCsv {
        allFetalCsv {
          nodes {
            Gene_Symbol
            SumCoverage
            SumNum_Proteins
            SumNum_Unique_Peptides
            SumNum_Peptides
            SumNum_PSMs
            Score_A2
            Coverage_A2
            Num_Peptides_A2
            Num_PSM_A2
            Score_A4
            Coverage_A4
            Num_Peptides_A4
            Num_PSM_A4
            Num_AAs
            MW_kDa
            calc_pI
          }
        }
      }
    `
  );
  return allFetalCsv.nodes;
};