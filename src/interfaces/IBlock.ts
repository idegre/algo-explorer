export type IBlock = {
	hash: string
	prevHash: string
	proposer: string
	reward: number
	round: number
	seed: string
	timestamp: number
	txns: []
}
