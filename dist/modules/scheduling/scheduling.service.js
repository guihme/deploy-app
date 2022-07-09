"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulingService = void 0;
const common_1 = require("@nestjs/common");
const entity_1 = require("../../entity");
const result_1 = require("../../shared/result");
const repository_1 = require("../../repository");
let SchedulingService = class SchedulingService {
    constructor(schedulingRepository) {
        this.schedulingRepository = schedulingRepository;
    }
    async createAndSave(data) {
        const created = entity_1.Scheduling.create(data);
        if (created.isFailure) {
            return created;
        }
        const saved = await this.schedulingRepository.save(created.getValue());
        if (saved.isFailure) {
            return result_1.Result.fail(new Error("schedule already exists."));
        }
        return created;
    }
    async getAll() {
        return await this.schedulingRepository.all();
    }
};
SchedulingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repository_1.SchedulingRepository])
], SchedulingService);
exports.SchedulingService = SchedulingService;
//# sourceMappingURL=scheduling.service.js.map