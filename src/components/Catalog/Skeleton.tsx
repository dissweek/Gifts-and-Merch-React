import ContentLoader from "react-content-loader"

export const Skeleton = () => ( 
    <div className="catalog__card">
  <ContentLoader 
    speed={2}
    width={309}
    height={540}
    viewBox="0 0 309 560"
    backgroundColor="#e4e8ec"
    foregroundColor="#ffffff"
    >
    <rect x="16" y="325" rx="0" ry="0" width="277" height="82" /> 
    <rect x="0" y="0" rx="15" ry="15" width="309" height="309" /> 
    <rect x="16" y="422" rx="0" ry="0" width="160" height="15" /> 
    <circle cx="32" cy="468" r="16" /> 
    <circle cx="74" cy="468" r="16" /> 
    <circle cx="116" cy="468" r="16" /> 
    <rect x="16" y="500" rx="0" ry="0" width="115" height="50" /> 
    <rect x="242" y="500" rx="0" ry="0" width="49" height="50" />
  </ContentLoader>
      </div> 
)

