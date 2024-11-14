// src/mills/services/mills.service.spec.ts
import { expect } from 'chai';
import { MillsService } from './mill.service';
import { Repository } from 'typeorm';
import sinon from 'sinon';
import { Mill } from './mill.entity';

describe('MillsService', () => {
  let millsService: MillsService;
  let millRepository: sinon.SinonStubbedInstance<Repository<Mill>>;

  beforeEach(() => {
    millRepository = sinon.createStubInstance(Repository);
    millsService = new MillsService(millRepository as any);
  });

  it('should return all mills', async () => {
    const mills: Mill[] = [{ id: 1, latitude: 1, longitude: 1, quantitySold: 10, pricePerTon: 100, transactionCount: 1, lastTransactionDate: new Date() }];
    millRepository.find.resolves(mills);

    const result = await millsService.getAllMills();
    expect(result).to.deep.equal(mills);
  });
});
