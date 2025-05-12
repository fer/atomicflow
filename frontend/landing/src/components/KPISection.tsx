import React from 'react';
import StatsCounter from './StatsCounter';

const KPISection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-bg relative overflow-hidden">
      <div className="container mx-auto px-6">
        <StatsCounter />
      </div>
    </section>
  );
};

export default KPISection;