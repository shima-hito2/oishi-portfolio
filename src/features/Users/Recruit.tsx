import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Arial', sans-serif;
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const SubTitle = styled.h2`
  color: #555;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const JobList = styled.ul`
  list-style: none;
  padding: 0;
`;

const JobItem = styled.li`
  background: #fff;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const JobTitle = styled.h3`
  margin-top: 0;
  color: #0073e6;
`;

const JobDescription = styled.p`
  color: #666;
`;

const CompanyInfo = styled.p`
  color: #666;
  line-height: 1.6;
`;

export const Recruit = () => {
	return (
		<Container>
			<Title>採用情報</Title>
			<Section>
				<SubTitle>募集職種</SubTitle>
				<JobList>
					<JobItem>
						<JobTitle>フロントエンドエンジニア</JobTitle>
						<JobDescription>
							Reactを使ったWebアプリケーションの開発を担当します。
						</JobDescription>
						<JobDescription>経験: 2年以上</JobDescription>
						<JobDescription>勤務地: 東京</JobDescription>
					</JobItem>
					<JobItem>
						<JobTitle>バックエンドエンジニア</JobTitle>
						<JobDescription>
							Node.jsを使ったサーバーサイドの開発を担当します。
						</JobDescription>
						<JobDescription>経験: 3年以上</JobDescription>
						<JobDescription>勤務地: 大阪</JobDescription>
					</JobItem>
					<JobItem>
						<JobTitle>デザイナー</JobTitle>
						<JobDescription>
							UI/UXデザインを担当します。
						</JobDescription>
						<JobDescription>経験: 1年以上</JobDescription>
						<JobDescription>勤務地: リモート</JobDescription>
					</JobItem>
				</JobList>
			</Section>
			<Section>
				<SubTitle>会社情報</SubTitle>
				<CompanyInfo>株式会社ポートフォリオ君</CompanyInfo>
				<CompanyInfo>所在地: 東京都新宿区</CompanyInfo>
				<CompanyInfo>設立: 2020年</CompanyInfo>
				<CompanyInfo>従業員数: 50名</CompanyInfo>
			</Section>
			<Section>
				<SubTitle>応募方法</SubTitle>
				<CompanyInfo>
					履歴書と職務経歴書をメールでお送りください。
				</CompanyInfo>
				<CompanyInfo>メールアドレス: recruit@example.com</CompanyInfo>
			</Section>
		</Container>
	);
};
