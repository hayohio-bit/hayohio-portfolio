import './PortfolioList.css';
import PortfolioCard from './PortfolioCard';

/**
 * PortfolioList 컴포넌트
 * 포트폴리오 카드 목록을 그리드 형태로 표시합니다.
 */
function PortfolioList({ portfolios }) {
// portfolios가 없거나 배열이 아닐 경우 방어 코드
if (!portfolios || !Array.isArray(portfolios) || portfolios.length === 0) {
    return (
    <div className="portfolio-list-empty">
        <p>표시할 포트폴리오가 없습니다.</p>
    </div>
    );
}

return (
    <div className="portfolio-list">
    {portfolios.map((portfolio) => (
        <PortfolioCard key={portfolio.id} portfolio={portfolio} />
    ))}
    </div>
);
}

export default PortfolioList;
