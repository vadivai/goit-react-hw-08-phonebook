import { BlueText, Paragraph, Section, Wrapper } from 'helpers/common.styled';

export default function HomePage() {
  return (
    <>
      <Section>
        <Wrapper>
          <Paragraph>Добрий день, друже! </Paragraph>
          <Paragraph>
            Це <BlueText>база контактів Phonebook</BlueText> для особистого
            використання. Пройдіть реєстрацію або залогуйтеся.
          </Paragraph>
          <Paragraph>
            Ви можете <BlueText>додати/видалити</BlueText> та{' '}
            <BlueText>відфільтрувати</BlueText> свої контакти.
          </Paragraph>
          <Paragraph>
            Для підтримки тицніть <a href="support@phonebook.ua">сюди</a>{' '}
          </Paragraph>
        </Wrapper>
      </Section>
    </>
  );
}
