import { Logger, pino, LoggerOptions } from "pino";
import { Service } from "typedi";

@Service()
class LoggerService {
	private logger: Logger;

	constructor(options: LoggerOptions = {}) {
		this.logger = pino({
			transport: {
				target: "pino-pretty",
				options: {
					translateTime: "yyyy-mm-dd HH:mm:ss",
					colorize: true,
				},
			},
			...options,
		});
	}

	public info(message: string, data?: any) {
		this.logger.info(message, data);
	}

	public debug(message: string, data?: any) {
		this.logger.debug(message, data);
	}

	public warn(message: string, data?: any) {
		this.logger.warn(message, data);
	}

	public error(message: string, data?: any) {
		this.logger.error(message, data);
	}

	public fatal(message: string, data?: any) {
		this.logger.fatal(message, data);
	}
}

export default LoggerService