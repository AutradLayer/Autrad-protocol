use anchor_lang::prelude::*;

declare_id!("AUTRD11111111111111111111111111111111111");

#[program]
pub mod markets {
    use super::*;

    pub fn open_position(
        _ctx: Context<OpenPosition>,
        market: String,
        amount: u64,
    ) -> Result<()> {
        msg!("Opened {} position with {}", market, amount);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct OpenPosition<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,
}
